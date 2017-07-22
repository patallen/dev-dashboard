import React from 'react';
import styled from 'styled-components';

const PageHeader = styled.div`
  width: 100%;
  height: ${({height}) => height ? height : '500px'};
  background: #24292E;
  display: flex;
  justify-content: center;
`;

export default PageHeader;
