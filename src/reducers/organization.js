import * as actionTypes from "actions/actionTypes";
import { reducerActionError } from "reducers";

const initialState = { name: "" };

export default function organizationReducer(state, action) {
  if (typeof state === "undefined") {
    return initialState;
  }

  let newState;
  switch (action.type) {
    case actionTypes.SET_ORGANIZATION:
      newState = {
        ...state,
        ...action.payload
      };
      break;
    default:
      reducerActionError(action.type, organizationReducer);
  }
  return newState;
}
