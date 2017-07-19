import React from "react";
import "./styles.scss";

export const NavigationHeader = props => {
  return (
    <header styleName="header">
      {props.children}
    </header>
  );
};

export const OrgBadge = props => {
  let org = props.organization;
  let image = org.avatarUrl ? <img alt="avatar" src={org.avatarUrl} /> : null;
  return (
    <div styleName="org-badge">
      {image}
      <a href={org.url}>
        {org.name}
      </a>
    </div>
  );
};

export const Navigation = props => {
  let styles = "nav";
  if (props.rightAlign) {
    styles += " nav-right-aligned";
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
