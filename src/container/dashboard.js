/* eslint-disable react/no-unused-state */
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { connect } from 'react-redux'
import { fetchTitles } from '../action/index'
import './dashboard.css';

class Dashboard extends React.Component {
  state = {
    showForm: false,
    showDiv: false,
    quizName: '',
    titles: [],
  };

  async componentDidMount() {
    await axios
      .get('https://serene-mountain-66508.herokuapp.com/api/v1/quizzes')
      .then(res => {
        const titles = res.data;
        this.setState({ titles });
      })
      .catch(error => console.log(error));
  
    const { titles } = this.state;
    const { fetchTitles } = this.props;
  
    fetchTitles(titles);
    console.log(titles)
  }

  
  postQuizName = async () => {
    axios.post('https://serene-mountain-66508.herokuapp.com/api/v1/quizzes', {title: this.state.quizName})
  }
  
  handleSubmit = () => {
    this.setState({showForm: false, showDiv: true})
    this.showDiv()
    this.postQuizName()
    
  }
  
  handleChange = e => {
    this.setState({
      quizName: e.target.value,
    });
  };

  showDiv = () => {
    return (
      <div>Quiz Created</div>
    );
  }

  showForm = () => {
    const { quizName } = this.state;
     return (
        <div className="px-md-5 form-group">
          <form onSubmit={this.handleSubmit}>
            <h6>Create Quiz:</h6>
            <input 
              type="text"  
              className="form-control" 
              placeholder="Quiz Name" 
              name="quizName"
              value={quizName}
              onChange={this.handleChange}
            />
            <br/>
            <button type="submit">Create</button>
          </form>
        </div>
      );
   }
  render() {

    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <Link to="/register" className="btn btn-link white"><h2>NowLedge</h2></Link>
          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
              <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav">
                  <Link to="/" className="nav-item nav-link active">Home</Link>
              </div>
              <div className="navbar-nav ml-auto">
                  <Link to="/login" className="nav-item nav-link">Login</Link>
                  <Link to="/register" className="nav-item nav-link">Register</Link>
              </div>
          </div>
        </nav>
        <br />

        <main className="px-md-5">
          <div className="d-flex bd-highlight">
            <div className="p-2 w-50 bd-highlight">
              <h2>Take your students'</h2>
              <h2>success to the next level</h2>
              <p>NowLedge helps teachers engage</p>
              <p>students of all levels through</p>
              <p>curriculum-based materials,</p>
              <p>interactive study methods and games.</p>
            <div className="row mx-md-n5">
              <div className="col px-md-5"><button className="p-3 border bg-light" onClick={() => this.setState({showForm: true}) }>I'm a teacher</button></div>
              <div className="col px-md-5"><button className="p-3 border bg-light">I'm a student</button></div>
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
            {this.state.showDiv ? this.showDiv() : null}
          <hr />
          </div>
        </main>

      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchTitles: titles => dispatch(fetchTitles(titles)),
});

export default connect(null, mapDispatchToProps)(Dashboard);