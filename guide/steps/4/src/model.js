'use strict';

var KEY = 'login-form-demo-last';

var clear;
var load;
var save;

if (window.localStorage) {
  clear = function () {
    window.localStorage.removeItem(KEY);
  };
  load = function () {
    return window.localStorage.getItem(KEY);
  };
  save = function (value) {
    window.localStorage.setItem(KEY, value);
  };
} else {
  clear = load = save = function () {};
}

function revert (str) {
  var reverted = '';

  for (var i = str.length - 1; i >= 0; i--) {
    reverted += str[i];
  }

  return reverted;
}

var user = load();

module.exports = {
  login: function (data) {
    if (data.login.length < 3 || revert(data.login) !== data.password) {
      throw new Error('Invalid data');
    }

    if (data.remember) {
      save(data.login);
    }
    user = data.login;
  },
  logout: function () {
    clear();
    user = null;
  },
  status: function () {
    return user;
  }
};

