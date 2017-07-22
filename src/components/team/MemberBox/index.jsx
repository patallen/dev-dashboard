import React from "react";
import styled from 'styled-components';

import MemberAvatar from "components/team/MemberAvatar";

const MemberBoxWrapper = styled.div`
  width: 160px;
  min-width: 160px;
  margin: 10px;
  border: 1px solid lightgray;
  flex-direction: column;
  padding: 10px 0;
  align-items: center;
  display: flex;
`;

const MemberBox = props => {
  let { avatarUrl, url, login, name } = props;
  return (
    <MemberBoxWrapper>
      <MemberAvatar alt="Member Avatar" src={ avatarUrl } />
      <a href={ url }>
        @{ login }
      </a>
      { name }
    </MemberBoxWrapper>
  )
}

export default MemberBox;
