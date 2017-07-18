import React from "react";
import "./styles.scss";

export const NavigationHeader = props => {
  return (
    <header styleName="header">
      {props.children}
    </header>
  )
}

export const OrgBadge = props => {
  return (
    <div styleName="org-badge">
      {props.children}
    </div>
  );
};

export const Navigation = props => {
  let styles = "nav";
  if (props.rightAlign) {
    styles += " nav-right-aligned"
  }

  return (
    <nav styleName={styles}>
      {props.children}
    </nav>
  );
};

export const NavItem = props => {
  return (
    <div styleName="nav-item">
      {props.children}
    </div>
  );
};
