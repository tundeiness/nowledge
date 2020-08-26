/* eslint-disable react/no-unused-state */
import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);

    

    };

  render() {

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4" />
          <div className="col-md-4 mt-5">
            <h2 className="text-center">Login To Continue</h2>
            <form>
              <div className="form-group">
                <h6>Username:</h6>
                <input type="text" id="firstName" className="form-control input-shadow" placeholder="Enter Username"  name="firstName" />
                 <div className="help-block">Username is required</div>
              </div>
              <div className="form-group">
                <h6>Password:</h6>
                <input type="text" id="lastName" className="form-control input-shadow" placeholder="Enter Password" name="lastName" />
                <div className="help-block">Password is required</div>
              </div>

              <button type="button"  className="btn btn-primary btn-block">Login</button>
              <Link to="/register" className="btn btn-link">Register</Link>
            </form>
          </div>
          <div className="col-md-4" />
        </div>
      </div>
    );
  }
}

export default Login;
