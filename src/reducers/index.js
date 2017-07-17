import { combineReducers } from "redux";

import organizationReducer from "reducers/organization";

export default combineReducers({
  organization: organizationReducer
});

export class ReducerError extends Error {}
export function reducerActionError(actionType, reducer) {
  throw new Error(
    `"${actionType}" is not a valid action type for reducer ${reducer.name}.`
  );
}
