'use strict';

function revert (str) {
  var reverted = '';

  for (var i = str.length - 1; i >= 0; i--) {
    reverted += str[i];
  }

  return reverted;
}

var user = null;

module.exports = {
  login: function (data) {
    if (data.login.length < 3 || revert(data.login) !== data.password) {
      throw new Error('Invalid data');
    }

    user = data.login;
  },
  logout: function () {
    user = null;
  },
  status: function () {
    return user;
  }
};
