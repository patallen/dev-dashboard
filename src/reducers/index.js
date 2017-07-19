import { combineReducers } from "redux";

import organizationReducer from "reducers/organization";
import teamReducer from "reducers/team";

export default combineReducers({
  organization: organizationReducer,
  team: teamReducer
});
