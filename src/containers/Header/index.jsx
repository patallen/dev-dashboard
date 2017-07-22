import React, { Component } from "react";
import { connect } from "react-redux";

import PageHeader from 'components/PageHeader';
import Content from "components/Content";
import OrgBadge from "components/OrgBadge";
import {
  NavigationHeader,
  Navigation,
  NavItem
} from "components/navigation";
import { Flex } from 'components/layout';

class Header extends Component {
  render() {
    let { organization } = this.props;
    return (
      <PageHeader>
        <Content>
          <Flex>
            <OrgBadge organization={organization} />
          </Flex>
          <Flex flex={2}>
            <Navigation floatContent="right">
              <NavItem>Nav Item 1</NavItem>
              <NavItem>Nav Item 2</NavItem>
              <NavItem>Nav Item 3</NavItem>
            </Navigation>
          </Flex>
        </Content>
      </PageHeader>
    );
  }
}

function mapStateToProps(state) {
  let { organization } = state;
  return { organization };
}

export default connect(mapStateToProps)(Header);
