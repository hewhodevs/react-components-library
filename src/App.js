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
          title="RPG's"
          childItems={[
            "The Witcher 3: Wild Hunt",
            "The Legend of Zelda: Breath of the Wild",
            "The Elder Scrolls V: Skyrim"
          ]}
          parentPaddingRight="20px"
        />
        <NavLinkDropDown
          title="Strategy"
          childItems={[
            "Civilization V",
            "Age of Empires",
            "XCOM"
          ]}
          parentPaddingRight="20px"
        />
        <NavLinkDropDown
          title="Classics"
          childItems={[
            "Pac-Man",
            "Tetris",
            "Space Invaders"
          ]}
          parentPaddingRight="20px"
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
  display: flex;
  justify-content: space-between;
`;
