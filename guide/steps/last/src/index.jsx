'use strict';

var React = require('react');
var model = require('./model');
var Form = require('./form');

React.render( <Form model={model} />, document.getElementById('demo-last') );
