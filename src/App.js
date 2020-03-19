import React from "react";
import "./App.css";
import styled from "styled-components";
import { } from 'reactstrap';
import Picard from "./comps/Picard.js";

function App() {
  
  const MainTitle = styled.h1 `
    color: white;
    padding-bottom: 2%;
    border-bottom: 5px solid white;
  `;
  return (
    <div className="App">
      <MainTitle>Welcome to NASA's Picture of the Day!</MainTitle>
      <Picard />
    </div>
  );
}

export default App;
