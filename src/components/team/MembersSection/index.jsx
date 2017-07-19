import React from "react";

import MemberBox from "../MemberBox";
import Loader from "../../Loader";
import "./styles.scss";

const MembersSection = props => {
  let { members, isFetching } = props;
  let memberBoxes = members.map(member =>
    <MemberBox key={member.id} {...member} />
  );
  let display = isFetching ? <Loader /> : memberBoxes;
  return (
    <div styleName="members-section">
      {display}
    </div>
  );
};

export default MembersSection;
