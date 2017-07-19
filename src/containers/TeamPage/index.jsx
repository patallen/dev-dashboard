import React, { Component } from "react";
import { connect } from "react-redux";

import MembersSection from "../../components/team/MembersSection";
import "./styles.scss";

class TeamPage extends Component {
  render() {
    let { members, isFetching } = this.props;
    return (
      <div>
        <MembersSection members={members} isFetching={isFetching} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  let { members, isFetching } = state.team;
  return { members, isFetching };
}

export default connect(mapStateToProps)(TeamPage);
