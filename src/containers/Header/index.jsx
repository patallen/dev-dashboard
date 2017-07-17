import React, { Component } from "react";
import { connect } from "react-redux";
import { OrgBadge, Navigation, NavItem } from "../../components/navigation";
import "./styles.scss";

class Header extends Component {
  render() {
    let { name: organizationName } = this.props.organization;
    return (
      <header>
        <OrgBadge>
          {organizationName}
        </OrgBadge>
        <Navigation>
          <NavItem>Nav Item 1</NavItem>
          <NavItem>Nav Item 2</NavItem>
          <NavItem>Nav Item 3</NavItem>
        </Navigation>
      </header>
    );
  }
}

function mapStateToProps(state) {
  let { organization } = state;
  return { organization };
}

export default connect(mapStateToProps)(Header);
