// model.js

var user = null;

var model = {
  login: function (data) {
    if (data.login.length < 3 || revert(data.login) !== data.password) {
      throw new Error('Invalid data');
    }

    user = data.login;
  },
  status: function () {
    return user;
  }
};
