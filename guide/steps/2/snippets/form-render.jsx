// form.jsx

render: function() {
  var user = this.props.model.status();
  var form = user ? 'Hello, ' + user : this.renderLoginForm();

  return (
    <div className="panel panel-primary">
      // ...
      <div className="panel-footer">
        <em>Password must be equal to the reverted login and longer than 3 symbols</em>
      </div>
    </div>
  );
}
