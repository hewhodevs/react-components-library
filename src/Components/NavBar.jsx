import React from "react";
import styled from "styled-components";
import NavLinkDropDown from "./NavLinkDropDown";

export default class NavBar extends React.Component {
  render() {
    return (
      <NavBarContainer>
        <NavLinkDropDown />
        <NavLinkDropDown />
      </NavBarContainer>
    );
  }
}

const NavBarContainer = styled.div`
  display: flex;
  position: relative;
  top: 40px;
  left: 40px;
`;
