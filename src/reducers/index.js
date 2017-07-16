import { combineReducers } from "redux";

import organizationReducer from "reducers/organization";

export default combineReducers({
  organization: organizationReducer
});
