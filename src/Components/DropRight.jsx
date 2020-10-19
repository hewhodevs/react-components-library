import React from "react";
import styled from "styled-components";

const DropRightContainer = styled.div``;

export default class DropRight extends React.Component {
  render() {
    return (
      <DropRightContainer>
        <div className="parent"></div>
        <div className="children"></div>
      </DropRightContainer>
    );
  }
}
