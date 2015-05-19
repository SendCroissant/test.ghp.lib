(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var React = require('react');

var Form = React.createClass({displayName: "Form",

  _handleLogin: function (e) {
    e.preventDefault();

    var error = null;
    try {
      this.props.model.login(this.fetchData());
    } catch (e) {
      error = e.message;
    }

    this.setState({
      error: error
    });
  },

  _handleLogout: function (e) {
    e.preventDefault();

    this.props.model.logout();
    this.forceUpdate();
  },

  fetchData: function () {
    return {
      login: this.refs.login.getDOMNode().value,
      password: this.refs.password.getDOMNode().value,
      remember: this.refs.remember.getDOMNode().checked
    };
  },

  getInitialState: function() {
    return {
      error: null
    };
  },

  render: function() {
    var user = this.props.model.status();
    var form = user ? this.renderLogoutForm(user) : this.renderLoginForm();

    return (
      React.createElement("div", {className: "panel panel-primary"}, 
        React.createElement("div", {className: "panel-heading"}, "Login Form: full functionality"), 
        form, 
        React.createElement("div", {className: "panel-footer"}, 
          React.createElement("em", null, "Password must be equal to the reverted login and longer than 3 symbols")
        )
      )
    );
  },

  renderLoginForm: function () {
    var errorClass = this.state.error ? '  has-error' : '';
    return (
      React.createElement("form", {className: "panel-body form-horizontal clearfix", onSubmit: this._handleLogin}, 
        React.createElement("div", {className: "form-group" + errorClass}, 
          React.createElement("div", {className: "col-sm-6"}, 
            React.createElement("input", {ref: "login", type: "text", className: "form-control", id: "inputLogin", 
              placeholder: "Login"})
          ), 
          React.createElement("div", {className: "col-sm-6"}, 
            React.createElement("input", {ref: "password", type: "password", className: "form-control", id: "inputPassword", 
              placeholder: "Password"})
          )
        ), 
        React.createElement("div", {className: "form-group"}, 
          React.createElement("div", {className: "col-sm-6 text-right"}, 
            React.createElement("button", {type: "submit", className: "btn btn-info"}, "Log in")
          ), 
          React.createElement("div", {className: "col-sm-6"}, 
            React.createElement("div", {className: "checkbox"}, 
              React.createElement("label", null, React.createElement("input", {ref: "remember", type: "checkbox"}), "Remember me")
            )
          )
        )
      )
    );
  },

  renderLogoutForm: function (user) {
    return (
      React.createElement("form", {className: "panel-body form-horizontal clearfix", onSubmit: this._handleLogout}, 
        React.createElement("div", {className: "form-group"}, 
          React.createElement("label", {className: "col-sm-6 control-label"}, "Hello, ", user, "!"), 
          React.createElement("div", {className: "col-sm-6"}, 
            React.createElement("button", {className: "btn btn-danger"}, "Log out")
          )
        )
      )
    );
  }

});

module.exports = Form;

},{"react":4}],2:[function(require,module,exports){
'use strict';

var React = require('react');
var model = require('./model');
var Form = require('./form');

React.render( React.createElement(Form, {model: model}), window.document.getElementById('example') );

},{"./form":1,"./model":3,"react":4}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
'use strict';

var React = {};

if (typeof window !== 'undefined' && window.React) {
	React = window.React;
} else {
	console.warn('Include React from CDN: http://facebook.github.io/react/downloads.html#individual-downloads');
}

module.exports = React;

},{}]},{},[2]);
