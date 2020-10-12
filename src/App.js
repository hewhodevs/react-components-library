import React from "react";
import "./styles.css";
import styled from "styled-components";
import NavBar from "./Components/NavBar";

export default function App() {
  return (
    <StyledApp className="App">
      <NavBar />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  height: 100vh;
  box-sizing: border-box;
`;
