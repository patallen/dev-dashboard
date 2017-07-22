import styled from 'styled-components';
import React from "react";

export const NavigationHeader = styled.div`
  color: white;
  padding: 0 10px;
  height: 60px;
  width: 100%;
  background: #24292e;
`;

export const Navigation = styled.nav`
  color: rgba(255, 255, 255, .75);
  display: flex;
  justify-content: flex-end;
  height: 60px;
  flex: 2;
  float: ${ ({ floatContent }) => floatContent ? floatContent : 'none' };
`;

export const NavItem = styled.div`
  padding: 0 10px;
  cursor: pointer;
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 100%;
  flex: 1;
  max-width: 120px;

  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;
