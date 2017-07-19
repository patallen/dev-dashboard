import * as actionTypes from "./actionTypes";
import { membersQuery, queryGithub } from "../apis/github";

function requestTeamMembers(organization) {
  return {
    type: actionTypes.REQUEST_TEAM_MEMBERS,
    payload: organization
  };
}

function receiveTeamMembers(teamMembers) {
  return {
    type: actionTypes.RECEIVE_TEAM_MEMBERS,
    payload: teamMembers
  };
}

export function fetchTeamMembers(organization) {
  return function(dispatch) {
    dispatch(requestTeamMembers(organization));
    return queryGithub(membersQuery(organization)).then(
      res => {
        let members = res.data.data.organization.members.nodes;
        dispatch(receiveTeamMembers({ members }));
      },
      error => console.log("An error occured.", error)
    );
  };
}
