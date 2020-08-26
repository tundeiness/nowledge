import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import register from './auth/register';
import login from './auth/login';
import home from './home/home';
import dashboard from './dashboard/dashboard'
import '../App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={home} />
        <Route path="/register" exact component={register} />
        <Route path="/login" exact component={login} />
        <Route path="/dashboard" exact component={dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
