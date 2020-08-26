/* eslint-disable react/no-unused-state */
import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';


class Dashboard extends React.Component {
  state= {showForm: true}

  showForm = () => {
     return (
       <div> 
        <form>
          <div className="px-md-5 form-group">
            <h6>Create Quiz:</h6>
            <input type="text" id="quizname" className="form-control" placeholder="Quiz Name" />
             <br/>
            <button onClick={() => this.setState({showForm: false}) }>Create</button>
          </div>
          </form>
        </div>
      );
   }
  render() {

    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <Link to="/register" className="btn btn-link white"><h2>NowLedge</h2></Link>
          <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
              <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarCollapse">
              <div class="navbar-nav">
                  <Link to="/" className="nav-item nav-link active">Home</Link>
              </div>
              <div class="navbar-nav ml-auto">
                  <Link to="/login" className="nav-item nav-link">Login</Link>
                  <Link to="/register" className="nav-item nav-link">Register</Link>
              </div>
          </div>
        </nav>
        <br />

        <main className="px-md-5">
          <div class="d-flex bd-highlight">
            <div class="p-2 w-50 bd-highlight">
              <h2>Take your students'</h2>
              <h2>success to the next level</h2>
              <p>NowLedge helps teachers engage</p>
              <p>students of all levels through</p>
              <p>curriculum-based materials,</p>
              <p>interactive study methods and games.</p>
            <div className="row mx-md-n5">
              <div className="col px-md-5"><button class="p-3 border bg-light" onClick={() => this.setState({showForm: true}) }>I'm a teacher</button></div>
              <div className="col px-md-5"><button class="p-3 border bg-light">I'm a student</button></div>
            </div>
            </div>
            <div className="p-2 flex-shrink-1 bd-highlight">
              <img className="img-responsive" src="https://images.prismic.io/quizlet-prod/e5f22f21-7f67-4f29-aac0-8cf0b3fa048a_classroom.png?auto=compress,format" alt=""/>
            </div>
          </div>
          <hr />
          <br />
          <div className="img thumbnail">
            {this.state.showForm ? this.showForm() : null}
          <hr />
          </div>
        </main>

      </div>
    );
  }
}

export default Dashboard;
