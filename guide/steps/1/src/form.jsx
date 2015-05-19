'use strict';

var React = require('react');

var Form = React.createClass({

  _handleLogin: function (e) {
    e.preventDefault();

    var data = this.fetchData();

    window.alert([
      'You try to login with next data',
      'login: ' + data.login,
      'password: ' + data.password
    ].join('\n'));
  },

  fetchData: function () {
    return {
      login: this.refs.login.getDOMNode().value,
      password: this.refs.password.getDOMNode().value
    };
  },

  render: function() {
    var form = this.renderLoginForm();

    return (
      <div className="panel panel-primary">
        <div className="panel-heading">Login Form: with "login" action simple handler</div>
        {form}
      </div>
    );
  },

  renderLoginForm: function () {
    return (
      <form className="panel-body form-horizontal clearfix" onSubmit={this._handleLogin}>
        <div className="form-group">
          <div className="col-sm-6">
            <input ref="login" type="text" className="form-control" id="inputLogin"
              placeholder="Login" />
          </div>
          <div className="col-sm-6">
            <input ref="password" type="password" className="form-control" id="inputPassword"
              placeholder="Password" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-6 text-right">
            <button type="submit" className="btn btn-info">Log in</button>
          </div>
        </div>
      </form>
    );
  }

});

module.exports = Form;
