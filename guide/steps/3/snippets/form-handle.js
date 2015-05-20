// form.jsx

_handleLogout: function (e) {
  e.preventDefault();

  this.props.model.logout();
  this.forceUpdate();
}
