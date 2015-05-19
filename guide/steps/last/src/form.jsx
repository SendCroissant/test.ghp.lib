'use strict';

var React = require('react');

var Form = React.createClass({

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
    }
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
      <div className="panel panel-primary">
        <div className="panel-heading">Login Form</div>
        {form}
        <div className="panel-footer">
          <em>Password must be equal to the reverted login and longer than 3 symbols</em>
        </div>
      </div>
    );
  },

  renderLoginForm: function () {
    var errorClass = this.state.error ? '  has-error' : '';
    return (
      <form className="panel-body form-horizontal clearfix" onSubmit={this._handleLogin}>
        <div className={"form-group" + errorClass}>
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
            <button type="submit" className="btn btn-info">Sign in</button>
          </div>
          <div className="col-sm-6">
            <div className="checkbox">
              <label><input ref="remember" type="checkbox"/>Remember me</label>
            </div>
          </div>
        </div>
      </form>
    );
  },

  renderLogoutForm: function (user) {
    return (
      <form className="panel-body form-horizontal clearfix" onSubmit={this._handleLogout}>
        <div className="form-group">
          <label className="col-sm-6 control-label">Hello, {user}!</label>
          <div className="col-sm-6">
            <button className="btn btn-danger">Sign out</button>
          </div>
        </div>
      </form>
    );
  }

});

module.exports = Form;
