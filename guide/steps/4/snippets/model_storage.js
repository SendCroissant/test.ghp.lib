// model.js

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

// ...

module.exports = {
  // ...
};
