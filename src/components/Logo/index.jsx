import React from 'react';
import styled from 'styled-components';

let widthHeightLimit = ({ maxSize }) => maxSize ? maxSize : '75px';

const Logo = styled.img`
    margin-right: 16px;
    max-width: ${ widthHeightLimit };
    max-height: ${ widthHeightLimit };
`;

export default Logo;
