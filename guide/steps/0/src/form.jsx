'use strict';

var React = require('react');

var Form = React.createClass({

 render: function() {
    var form = this.renderLoginForm();

    return (
      <div className="panel panel-primary">
        <div className="panel-heading">Login Form: that do nothing</div>
        {form}
      </div>
    );
  },

  renderLoginForm: function () {
    return (
      <form className="panel-body form-horizontal clearfix">
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
