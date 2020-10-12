import React from "react";
import "./styles.css";
import styled from "styled-components";
import NavLinkDropDown from "./Components/NavLinkDropDown";

export default function App() {
  return (
    <StyledApp className="App">
      <StyledDiv>
        <NavLinkDropDown
          title="No items"
          parentBGColor="#77008a"
          parentHoverBGColor="#a619bd"
        />
      </StyledDiv>
      <StyledDiv>
        <NavLinkDropDown
          title="Some items"
          childItems={[
            "link 1",
            "link 2, a new linkening",
            "link 3, a link to remember"
          ]}
          parentBGColor="#00804f"
          parentHoverBGColor="#14b577"
          childHoverBGColor="#14b577"
        />
      </StyledDiv>
      <StyledDiv>
        <NavLinkDropDown
          title="Default Theme"
          childItems={[
            "Link 4",
            "This is a longer link",
            "This is an even longer link text"
          ]}
        />
      </StyledDiv>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const StyledDiv = styled.div`
  padding: 60px;
`;
