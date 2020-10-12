import React from "react";
import styled from "styled-components";
import ThemeProvider from "styled-components";
import NavLinkDropDown from "./NavLinkDropDown";

export default class NavBar extends React.Component {
  render() {
    return (
      <NavBarContainer>
        <NavLinkDropDown title="No items" color="#00804f"/>
        <NavLinkDropDown
          title="Some items"
          childItems={[
            "link 1",
            "link 2, a new linkening",
            "link 3, a link to remember"
          ]}
        />
        <NavLinkDropDown
          title="Different Items"
          childItems={["Music", "Art", "They adapt to the width needed!"]}
        />
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
