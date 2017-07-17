import React from "react";
import "./styles.scss";

export const OrgBadge = props => {
  return (
    <div styleName="org-badge">
      {props.children}
    </div>
  );
};

export const Navigation = props => {
  return (
    <nav>
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
