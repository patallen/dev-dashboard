import React from 'react';
import styled from 'styled-components';

export const Flex = styled.div`
    display: ${(noFlexChildren) => noFlexChildren ? 'inline' : 'flex'};
    flex: ${({flex}) => flex ? flex : 1};
`;
