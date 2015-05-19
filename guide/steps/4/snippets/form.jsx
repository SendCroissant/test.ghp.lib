// form.jsx

fetchData: function () {
  return {
    // ...
    remember: this.refs.remember.getDOMNode().checked
  };
},

// ...

renderLoginForm: function () {
  // ...
  return (
    <form /*...*/ >
      // ...
      <div className="form-group">
        <div className="col-sm-6 text-right">
          <button type="submit" className="btn btn-info">
            Log in
          </button>
        </div>
        <div className="col-sm-6">
          <div className="checkbox">
            <label>
              <input ref="remember" type="checkbox"/>Remember me
            </label>
          </div>
        </div>
      </div>
    </form>
  );
},
