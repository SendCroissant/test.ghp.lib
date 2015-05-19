(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var React = require('react');

var Form = React.createClass({displayName: "Form",

 render: function() {
    var form = this.renderLoginForm();

    return (
      React.createElement("div", {className: "panel panel-primary"}, 
        React.createElement("div", {className: "panel-heading"}, "Login Form: that do nothing"), 
        form
      )
    );
  },

  renderLoginForm: function () {
    return (
      React.createElement("form", {className: "panel-body form-horizontal clearfix"}, 
        React.createElement("div", {className: "form-group"}, 
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
          )
        )
      )
    );
  }

});

module.exports = Form;

},{"react":3}],2:[function(require,module,exports){
'use strict';

var React = require('react');
var Form = require('./form');

React.render( React.createElement(Form, null), window.document.getElementById('example') );

},{"./form":1,"react":3}],3:[function(require,module,exports){
'use strict';

var React = {};

if (typeof window !== 'undefined' && window.React) {
	React = window.React;
} else {
	console.warn('Include React from CDN: http://facebook.github.io/react/downloads.html#individual-downloads');
}

module.exports = React;

},{}]},{},[2]);
