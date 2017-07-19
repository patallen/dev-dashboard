import React from "react";
import "./styles.scss";

const MemberBox = props => {
  return (
    <div styleName="member-box">
      <a href="##">
        <img alt="Member Avatar" src={props.avatarUrl} />
      </a>
      <a href={props.url} styleName="github-link">
        @{props.login}
      </a>
      {props.name}
    </div>
  );
};

export default MemberBox;
