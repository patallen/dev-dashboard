import * as actionTypes from "actions/actionTypes";

const initialState = {
  members: [],
  isFetching: false
};

export default function teamReducer(state, action) {
  if (typeof state === "undefined") {
    return initialState;
  }

  let newState;
  switch (action.type) {
    case actionTypes.REQUEST_TEAM_MEMBERS:
      newState = {
        ...state,
        isFetching: true
      };
      break;
    case actionTypes.RECEIVE_TEAM_MEMBERS:
      newState = {
        ...state,
        isFetching: false,
        ...action.payload
      };
      break;
    default:
      return state;
  }
  return newState;
}
