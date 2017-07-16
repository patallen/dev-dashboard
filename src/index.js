import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "app";
import Dashboard from "containers/TeamPage";
import UserProfile from "containers/UserProfile";
import allReducers from "./reducers";

import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const router = (
  <Provider store={store}>
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/user/:userid" component={UserProfile} />
        </Switch>
      </App>
    </Router>
  </Provider>
);

ReactDOM.render(router, document.getElementById("app"));
