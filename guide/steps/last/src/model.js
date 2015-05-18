'use strict';

var clear;
var read;
var write;

if (window.localStorage) {
  clear = function (key) {
    window.localStorage.removeItem(key);
  };
  read = function (key) {
    return window.localStorage.getItem(key);
  };
  write = function (key, value) {
    window.localStorage.setItem(key, value);
  };
} else {
  clear = read = write = function () {};
}

function revert (str) {
  var reverted = '';

  for (var i = str.length - 1; i >= 0; i--) {
    reverted += str[i];
  }

  return reverted;
}


function Model (key) {
  this._key = key;
  this._user = read(key);
}

Model.prototype.login = function (data) {
  if (data.login.length < 3 || revert(data.login) !== data.password) {
    throw new Error('Invalid data');
  }

  if (data.remember) {
    write(this._key, data.login);
  }
  this._user = data.login;
};
Model.prototype.logout = function () {

  clear(this._key);
  this._user = null;
};
Model.prototype.status = function () {
  return this._user;
};

