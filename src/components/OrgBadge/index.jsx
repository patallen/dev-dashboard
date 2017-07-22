import React from "react";
import styled from "styled-components";

import Logo from "components/Logo";

const OrgBadgeWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 66px;
`;

const CompanyTitle = styled.a`
    color: white;
    text-decoration: none;
`;

const OrgBadge = props => {
  let { url, name, avatarUrl } = props.organization;

  return (
    <OrgBadgeWrapper>
      { avatarUrl ? <Logo alt="Logo" src={ avatarUrl } /> : null }
      <CompanyTitle href={ url }>{ name }</CompanyTitle>
    </OrgBadgeWrapper>
  );
};

export default OrgBadge;
