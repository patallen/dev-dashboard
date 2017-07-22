import React, { Component } from "react";
import { connect } from "react-redux";

import MembersSection from "../../components/team/MembersSection";

class TeamPage extends Component {
  render() {
    let { members, isFetching } = this.props;
    return (
      <MembersSection members={members} isFetching={isFetching} />
    );
  }
}

function mapStateToProps(state) {
  let { members, isFetching } = state.team;
  return { members, isFetching };
}

export default connect(mapStateToProps)(TeamPage);
