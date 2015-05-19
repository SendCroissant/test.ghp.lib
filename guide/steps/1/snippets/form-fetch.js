// form.jsx

fetchData: function () {
  return {
    login: this.refs.login.getDOMNode().value,
    password: this.refs.password.getDOMNode().value
  };
}
