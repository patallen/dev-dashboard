import React, { Component } from "react";
import { connect } from "react-redux";
import "./styles.scss";

class TeamPage extends Component {
  render() {
    return <div styleName="div-style">Dashboard</div>;
  }
}

function mapStateToProps(state) {
  let { organization } = state;
  return { organization };
}

export default connect(mapStateToProps)(TeamPage);
