// model.js

var user = load();

var model = {
  login: function (data) {
    // ...
    if (data.remember) {
      save(data.login);
    }
    user = data.login;
  },
  logout: function () {
    clear();
    user = null;
  },
  // ...
};
