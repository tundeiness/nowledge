/* eslint-disable react/no-unused-state */
import React from 'react';
import { Link } from 'react-router-dom';

class Question extends React.Component {
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
      firstName, lastName, username, email, submitted,
    } = this.state;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4" />
          <div className="col-md-4 mt-5">
            {/* <h2 className="text-center">User Registration</h2> */}
            <form>
              <div className={`form-group${submitted && !firstName ? ' has-error' : ''}`}>
                <h6>Question 1:</h6>
                <input type="text" id="firstName" className="form-control input-shadow" placeholder="Enter First Name" value={firstName} onChange={this.handleInputChange} name="firstName" />
                { submitted && !firstName && <div className="help-block">First Name is required</div> }
              </div>

              <div className={`form-group${submitted && !lastName ? ' has-error' : ''}`}>
                <h6>Question 2:</h6>
                <input type="text" id="lastName" className="form-control input-shadow" placeholder="Enter Last Name" value={lastName} onChange={this.handleInputChange} name="lastName" />
                { submitted && !lastName && <div className="help-block">Last Name is required</div> }
              </div>

              <div className={`form-group${submitted && !username ? ' has-error' : ''}`}>
                <h6>Question 3:</h6>
                <input type="text" id="userName" className="form-control input-shadow" placeholder="Enter user name" value={username} onChange={this.handleInputChange} name="userName" />
                { submitted && !username && <div className="help-block">username is required</div> }
              </div>
              <div className={`form-group${submitted && !email ? ' has-error' : ''}`}>
                <h6>Question 4:</h6>
                <input type="text" id="email" className="form-control input-shadow" placeholder="Enter Email" value={email} onChange={this.handleInputChange} name="email" />
                { submitted && !email && <div className="help-block">Email is required</div> }
              </div>

              <div className={`form-group${submitted && !email ? ' has-error' : ''}`}>
                <h6>Question 5:</h6>
                <input type="text" id="email" className="form-control input-shadow" placeholder="Enter Email" value={email} onChange={this.handleInputChange} name="email" />
                { submitted && !email && <div className="help-block">Email is required</div> }
              </div>

              <div className={`form-group${submitted && !email ? ' has-error' : ''}`}>
                <h6>Question 6:</h6>
                <input type="text" id="email" className="form-control input-shadow" placeholder="Enter Email" value={email} onChange={this.handleInputChange} name="email" />
                { submitted && !email && <div className="help-block">Email is required</div> }
              </div>

              <div className={`form-group${submitted && !email ? ' has-error' : ''}`}>
                <h6>Question 7:</h6>
                <input type="text" id="email" className="form-control input-shadow" placeholder="Enter Email" value={email} onChange={this.handleInputChange} name="email" />
                { submitted && !email && <div className="help-block">Email is required</div> }
              </div>

              <div className={`form-group${submitted && !email ? ' has-error' : ''}`}>
                <h6>Question 8:</h6>
                <input type="text" id="email" className="form-control input-shadow" placeholder="Enter Email" value={email} onChange={this.handleInputChange} name="email" />
                { submitted && !email && <div className="help-block">Email is required</div> }
              </div>

              <div className={`form-group${submitted && !email ? ' has-error' : ''}`}>
                <h6>Question 9:</h6>
                <input type="text" id="email" className="form-control input-shadow" placeholder="Enter Email" value={email} onChange={this.handleInputChange} name="email" />
                { submitted && !email && <div className="help-block">Email is required</div> }
              </div>

              <div className={`form-group${submitted && !email ? ' has-error' : ''}`}>
                <h6>Question 10:</h6>
                <input type="text" id="email" className="form-control input-shadow" placeholder="Enter Email" value={email} onChange={this.handleInputChange} name="email" />
                { submitted && !email && <div className="help-block">Email is required</div> }
              </div>

              {/* <div className={`form-group${submitted && !password ? ' has-error' : ''}`}>
                <h6>Question 5:</h6>
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
              </div> */}
              <button type="button" onClick={this.submitRegister} className="btn btn-primary btn-block">Submit</button>
              <Link to="/question" className="btn btn-link">New Question</Link>
            </form>
          </div>
          <div className="col-md-4" />
        </div>
      </div>
    );
  }
}

export default Question;
