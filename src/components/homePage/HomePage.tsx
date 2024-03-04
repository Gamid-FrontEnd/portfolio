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

const Menu = styled.div`
  position: absolute;
  top: 70%;
  left: 30%;
  transform: translate(-50%, -50%);
`;

//  edit styles for active later
const Item = styled.li`
  cursor: pointer;
  transition: all 0.4s;
  color: #28d4f7;

  &:hover {
    transform: scale(1.2);
    color: #0d9aff;
  }

  &:active {
    color: white;
  }
`;

const UnorderedList = styled.ul`
  list-style: none;

  ${Item} {
    margin-bottom: 10px;
  }
`;

const H1 = styled.h1`
  font-family: "Anta", sans-serif;
  margin: 0;
`;

const H3 = styled(H1)`
  font-size: 20px;
`;

const HomePage: React.FC = () => {
  return (
    <div className="homepage_main_div">
      <LeftBlock>
        <Intro>
          <H1>Name Surname</H1>
          <H3>Frontend developer</H3>
        </Intro>
        <Menu>
          <UnorderedList>
            <Item>
              <a>About</a>
            </Item>
            <Item>
              <a>Projects</a>
            </Item>
            <Item>
              <a>Contact</a>
            </Item>
          </UnorderedList>
        </Menu>
      </LeftBlock>
      <RightBlock></RightBlock>
    </div>
  );
};

export default HomePage;
