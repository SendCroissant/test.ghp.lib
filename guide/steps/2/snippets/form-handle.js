// form.jsx

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
}
