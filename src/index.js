import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";

import App from "app";
import TeamPage from "containers/TeamPage";
import UserProfile from "containers/UserProfile";
import allReducers from "./reducers";

import { fetchOrganization } from "./actions/organization";
import { fetchTeamMembers } from "./actions/team";

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunkMiddleware)
);

window.initializeState = organization => {
  // Set up initial state using "pallets" organization.
  // This is bound to window, so just call it in the console with
  // another organization `login` name
  store.dispatch(fetchOrganization(organization)).then(() => {
    store.dispatch(fetchTeamMembers(organization));
  });
};

window.initializeState("pallets");
const Routes = () =>
  <Provider store={store}>
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={TeamPage} />
          <Route path="/user/:userid" component={UserProfile} />
        </Switch>
      </App>
    </Router>
  </Provider>;

ReactDOM.render(<Routes />, document.getElementById("app"));
