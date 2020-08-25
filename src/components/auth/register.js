/* eslint-disable react/no-unused-state */
import React from 'react';
import { Link } from 'react-router-dom';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      password_digest: '',
      submitted: false,

    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const { name } = e.target;
    const { value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      firstName, lastName, username, email, password, submitted,
    } = this.state;
    return (
      <div className="col-md-4 col-md-offset-4">
        <h2 className="text-center">User Registration</h2>
        <form>
          <div className={`form-group${submitted && !firstName ? ' has-error' : ''}`}>
            {/* <label htmlFor="firstname">
              First Name:
              <input id="firstname" />
            </label> */}
            <input type="text" id="firstName" className="form-control input-shadow" placeholder="Enter First Name" value={firstName} onChange={this.handleInputChange} name="firstName" />
            { submitted && !firstName && <div className="help-block">First Name is required</div> }
          </div>
          <div className={`form-group${submitted && !lastName ? ' has-error' : ''}`}>
            {/* <label htmlFor="lastname">
              Last Name:
              {' '}
              <input id="lastname" />
            </label> */}
            <input type="text" id="lastName" className="form-control input-shadow" placeholder="Enter Last Name" value={lastName} onChange={this.handleInputChange} name="lastName" />
            { submitted && !lastName && <div className="help-block">Last Name is required</div> }
          </div>
          <div className={`form-group${submitted && !username ? ' has-error' : ''}`}>
            {/* <label htmlFor="username">
              Username:
              {' '}
              <input id="username" />
            </label> */}
            <input type="text" id="userName" className="form-control input-shadow" placeholder="Enter user name" value={username} onChange={this.handleInputChange} name="userName" />
            { submitted && !username && <div className="help-block">username is required</div> }
          </div>
          <div className={`form-group${submitted && !email ? ' has-error' : ''}`}>
            {/* <label htmlFor="email">
              Email:
              {' '}
              <input id="email" />
            </label> */}
            <input type="text" id="email" className="form-control input-shadow" placeholder="Enter Email" value={email} onChange={this.handleInputChange} name="email" />
            { submitted && !email && <div className="help-block">Email is required</div> }
          </div>
          <div className={`form-group${submitted && !password ? ' has-error' : ''}`}>
            {/* <label htmlFor="password">
              Password:
              {' '}
              <input id="password" />
            </label> */}
            <input
              type="password"
              id="password"
              className="form-control input-shadow"
              placeholder="Enter Password"
              value={password}
              onChange={this.handleInputChange}
              name="password"
            />
            { submitted && !firstName && <div className="help-block">Password is required</div> }
          </div>
          <button type="button" onClick={this.submitRegister} className="btn btn-primary btn-block">Register</button>
          <Link to="/login" className="btn btn-link">Login</Link>
        </form>
      </div>
    );
  }
}

export default Register;
