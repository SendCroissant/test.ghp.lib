// form.jsx

_handleLogin: function (e) {
  e.preventDefault();

  var data = this.fetchData();

  window.alert([
    'You try to login with next data',
    'login: ' + data.login,
    'password: ' + data.password
  ].join('\n'));
},

renderLoginForm: function () {
  return (
    <form className="panel-body form-horizontal clearfix" onSubmit={this._handleLogin}>
      // ...
    </form>
  );
}
