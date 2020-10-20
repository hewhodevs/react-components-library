import React from "react";
import "./styles.css";
import styled from "styled-components";
import NavBar from "./Components/NavBar";
import DropRight from "./Components/DropRight";

export default function App() {
  return (
    <StyledApp className="App">
      <div className="columnContainer">
        <DropRight title="Label 1" children={["Greetings","fellow traveller","stay a while, and listen"]} />
        <DropRight title="Label 2" children={["You shall not pass!", <span><img src="https://media4.giphy.com/media/ONostKY8aj8bK/source.gif"></img></span>,"Gandalf!"]} />
      </div>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  height: 100vh;
  box-sizing: border-box;
  background-color: #e8e8e8;
  margin: 40px;
`;
