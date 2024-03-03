import React from "react";
import "./App.css";
import HomePage from "./components/homePage/HomePage";
import styled from "styled-components";

const AppComponent = styled.div`
  text-align: center;
`;

const App: React.FC = () => {
  return (
    <AppComponent>
      <HomePage />
    </AppComponent>
  );
};

export default App;
