// form.jsx

render: function() {
  var form = this.renderLoginForm();

  return (
    <div className="panel panel-primary">
      <div className="panel-heading">Login Form: that do nothing</div>
      {form}
    </div>
  );
}
