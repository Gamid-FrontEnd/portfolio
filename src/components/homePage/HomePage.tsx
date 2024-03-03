import React from "react";
import "./homePage.css";
import styled from "styled-components";

const LeftBlock = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 50%;
  height: 100%;
  overflow: auto;
  float: left;

  color: white;

  border: 1px solid white;
`;

const RightBlock = styled.div`
  width: 50%;
  right: 0;
  top: 0;
  height: 100%;
  overflow: auto;
  float: right;

  color: white;

  border: 1px solid gold;
`;

const Intro = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const HomePage: React.FC = () => {
  return (
    <div className="homepage_main_div">
      <LeftBlock>
        <Intro>
          <h1>Hamid Akhmedov</h1>
          <h3>Frontend developer</h3>
        </Intro>
      </LeftBlock>
      <RightBlock></RightBlock>
    </div>
  );
};

export default HomePage;
