import React from "react";
import styled from "styled-components";

class NavLinkDropDown extends React.Component {
  render() {
    return (
      <NavLinkDropDownContainer>
        <div className="Parent">
          <span>Parent</span>
        </div>
        <div className="Children">
          <span className="ChildLink">child 1 something something</span>
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
  --blue: #0095d9;
  --lightblue: #40c3ff;
  --white: #ffffff;

  overflow: hidden;
  white-space: nowrap;

  &:hover .Children {
    display: flex;
  }

  .Parent {
    background-color: var(--blue);
    color: var(--white);
  }
  .Children {
    position: absolute;
    display: none;
    flex-direction: column;
    border: 1px solid black;
  }
  .ChildLink {
    border: 1px solid blue;
  }
`;
