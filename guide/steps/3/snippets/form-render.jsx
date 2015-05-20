// form.jsx

render: function() {
  // ...
  var form = user ? this.renderLogoutForm(user) : this.renderLoginForm();
  // ...
},

// ...

renderLogoutForm: function (user) {
  return (
    <form className="panel-body form-horizontal clearfix" onSubmit={this._handleLogout}>
      <div className="form-group">
        <label className="col-sm-6 control-label">Hello, {user}!</label>
        <div className="col-sm-6">
          <button className="btn btn-danger">Log out</button>
        </div>
      </div>
    </form>
  );
},
