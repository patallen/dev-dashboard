import * as actionTypes from "./actionTypes";

function requestOrganization(organization) {
  return {
    type: actionTypes.REQUEST_ORGANIZATION,
    payload: organization
  };
}

function receiveOrganization(organization) {
  return {
    type: actionTypes.RECEIVE_ORGANIZATION,
    payload: organization
  };
}

export function fetchOrganization(organization) {
  return function(dispatch) {
    dispatch(requestOrganization(organization));
    return new Promise(resolve => {
      resolve({ organization });
    }).then(
      res => dispatch(receiveOrganization(res)),
      error => console.log("An error occured.", error)
    );
  };
}
