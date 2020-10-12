import React from "react";
import styled from "styled-components";

// --------------------------
// Component Styles
// --------------------------

const NavLinkDropDownContainer = styled.div`
  --parentBGColor: ${(props) => props.parentBGColor || "#0095d9"};
  --parentHoverBGColor: ${(props) => props.parentHoverBGColor || "#19b7ff"};
  --parentTextColor: ${(props) => props.parentTextColor || "#ffffff"};
  --childBGColor: ${(props) => props.childBGColor || "#ffffff"};
  --childHoverBGColor: ${(props) => props.childHoverBGColor || "#19b7ff"};
  --childTextColor: ${(props) => props.childTextColor || "#000000"};
  --childTextHoverColor: ${(props) => props.childTextHoverColor || "#ffffff"};
  --parentPaddingRight: ${(props) => props.parentPaddingRight || "10px"};

  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  height: 100%;
  box-sizing: border-box;

  &:hover .Children {
    display: flex;
  }
  &:hover .Parent {
    background-color: var(--parentHoverBGColor);
  }

  .Parent {
    height: 100%;
    box-sizing: border-box;
    background-color: var(--parentBGColor);
    color: var(--parentTextColor);
    padding: 10px;
    padding-right: var(--parentPaddingRight);
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .Children {
    position: absolute;
    display: none;
    flex-direction: column;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    overflow: hidden;
  }
  .ChildLink {
    background-color: var(--childBGColor);
    padding: 10px;

    &:hover {
      background-color: var(--childHoverBGColor);
      color: var(--childTextHoverColor);
    }
  }
`;

// --------------------------
// React Component
// --------------------------

export default class NavLinkDropDown extends React.Component {
  render() {
    let childItems = <div></div>;
    if (this.props.childItems && this.props.childItems.length > 0) {
      childItems = this.props.childItems.map((childItem, index) => {
        return (
          <span key={index} className="ChildLink">
            {childItem}
          </span>
        );
      });
    }
    return (
      <NavLinkDropDownContainer
        parentBGColor={this.props.parentBGColor}
        parentHoverBGColor={this.props.parentHoverBGColor}
        parentTextColor={this.props.parentTextColor}
        childBGColor={this.props.childBGColor}
        childHoverBGColor={this.props.childHoverBGColor}
        childTextColor={this.props.childTextColor}
        childTextHoverColor={this.props.childTextHoverColor}
        parentPaddingRight={this.props.parentPaddingRight}
      >
        <div className="Parent">
          <span>{this.props.title ? this.props.title : "blank"}</span>
        </div>
        <div className="Children">{childItems}</div>
      </NavLinkDropDownContainer>
    );
  }
}
