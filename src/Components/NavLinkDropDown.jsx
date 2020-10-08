import React from "react";
import styled from "styled-components";

class NavLinkDropDown extends React.Component {
  render() {
    return (
      <NavLinkDropDownContainer>
        <div className="ParentLink">
          <span>Parent</span>
        </div>
        <div className="ChildrenContainer">
          <span className="ChildLink">child 1</span>
          <span className="ChildLink">child 2</span>
          <span className="ChildLink">child 3</span>
        </div>
      </NavLinkDropDownContainer>
    );
  }
}

export default NavLinkDropDown;

// --------------------------
// Component Styles
// --------------------------

const NavLinkDropDownContainer = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  .ParentLink {
    width: 100%;
    background-color: #0095d9;
    color: #ffffff;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: #40c3ff;
    }
  }

  .ChildrenContainer {
    width: 200px;
    display: none;
    box-sizing: border-box;
    background-color: #ffffff;
    box-shadow: 3px 3px 5px #888888;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    overflow: hidden;
  }

  .ChildLink {
    padding: 10px;

    &:hover {
      background-color: #40c3ff;
      color: #ffffff;
    }
  }

  :hover .ChildrenContainer {
    display: flex;
    flex-direction: column;
  }
`;
