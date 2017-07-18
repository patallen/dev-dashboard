import React, { Component } from "react";
import { connect } from "react-redux";

import {
  NavigationHeader,
  OrgBadge,
  Navigation,
  NavItem
} from "components/navigation";

import "./styles.scss";

class Header extends Component {
  render() {
    let { organization } = this.props;
    return (
      <NavigationHeader>
        <OrgBadge organization={organization}>
          {organization.name}
        </OrgBadge>
        <Navigation rightAlign={true}>
          <NavItem>Nav Item 1</NavItem>
          <NavItem>Nav Item 2</NavItem>
          <NavItem>Nav Item 3</NavItem>
        </Navigation>
      </NavigationHeader>
    );
  }
}

function mapStateToProps(state) {
  let { organization } = state;
  return { organization };
}

export default connect(mapStateToProps)(Header);
