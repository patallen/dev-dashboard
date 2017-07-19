import * as actionTypes from "actions/actionTypes";

const initialState = {
  name: "",
  isFetching: false
};

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
    case actionTypes.REQUEST_ORGANIZATION:
      newState = {
        ...state,
        isFetching: true
      };
      break;
    case actionTypes.RECEIVE_ORGANIZATION:
      newState = {
        ...state,
        isFetching: false,
        ...action.payload.organization
      };
      break;
    default:
      return state;
  }
  return newState;
}
