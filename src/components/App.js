import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import register from './auth/register';
import login from './auth/login'
import home from './home/home';
import '../App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={home} />
        <Route path="/register" exact component={register} />
        <Route path="/login" exact component={login} />
      </Switch>
    </Router>
  );
}

export default App;
