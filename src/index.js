import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import App from 'app';
import Dashboard from 'containers/Dashboard';
import UserProfile from 'containers/UserProfile';

const router = (
  <Router>
    <App>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path="/user/:userid" component={UserProfile} />
      </Switch>
    </App>
  </Router>
)

ReactDOM.render(router, document.getElementById('app'))
