// form.jsx

renderLoginForm: function () {
  var errorClass = this.state.error ? '  has-error' : '';
  return (
    <form className="panel-body form-horizontal clearfix" onSubmit={this._handleLogin}>
      // ...
    </form>
  );
}
