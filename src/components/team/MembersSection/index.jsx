import React from "react";
import styled from 'styled-components';

import MemberBox from "components/team/MemberBox";
import Loader from "components/Loader";

const MemberSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px;
  flex-wrap: wrap;
`;

const MembersSection = props => {
  let { members, isFetching } = props;

  let memberBoxes = members.map(member =>
    <MemberBox key={member.id} {...member} />
  );

  return (
    <MemberSectionWrapper>
      { isFetching ? <Loader /> : memberBoxes }
    </MemberSectionWrapper>
  );
};

export default MembersSection;
