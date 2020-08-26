import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="text-center">
        <h2>Login Successful!</h2>
        <h3>Welcome to Home Page</h3>
        <button className="btn btn-primary" onClick={this.getHome} type="button">Home</button>
        <Link className="dropdown-item" to="/login">Logout</Link>
        <Link to="/register" className="btn btn-link">Register</Link>
        <Link to="/dashboard" className="btn btn-link">Dashboard</Link>
      </div>
    );
  }
}

export default Home;
