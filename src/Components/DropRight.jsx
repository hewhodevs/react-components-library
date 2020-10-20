import React from "react";
import styled from "styled-components";

// --------------------------
// Component Styles
// --------------------------

const DropRightContainer = styled.div`
  display: flex;
  height: 38px;  /* why does this work?*/

  .parentContainer {
    cursor: pointer;
    &:hover + .children {
      display: flex;
    }
  }
  .parent {
    background: lightblue;
    padding: 10px;
    &:hover {
      background-color: #49dffc;
    }
  }
  .children {
    display: none;
    flex-direction: column;
    &:hover {
      display: flex;
    }
  }
  .child {
    cursor: pointer;
    padding: 10px;
    background-color: lightblue;
    border: 1px solid darkblue;
    &:hover {
      background-color: #49dffc;
    }
  }
`;

// --------------------------
// React Components
// --------------------------

export default class DropRight extends React.Component {
  render() {
    return(
      <DropRightContainer>
        <div className="parentContainer">
          <div className="parent">{this.props.title}</div>
        </div>
        <div className="children">
          {this.props.children.map((child, index) => {
            return <span className="child" key={index} >{child}</span>
          })}
        </div>
      </DropRightContainer>
    );
  }
}