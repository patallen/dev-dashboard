import * as actionTypes from "./actionTypes";
import { orgQuery, queryGithub } from "../apis/github";

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
    return queryGithub(orgQuery(organization)).then(
      res => dispatch(receiveOrganization(res.data.data)),
      error => console.log("An error occured.", error)
    );
  };
}
