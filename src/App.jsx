import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar/Navbar";
// import './App.css'
import styled from "styled-components";
import node from "./assets/node.png";
import react from "./assets/react.svg";
import html from "./assets/html-5.png";
import css from "./assets/css.png";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: lightblue;
  /* align-items: center; */
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 50%;
  align-items: center;
  padding: 30px;
  // paddingLeft: "130",
  background: lightgreen;
  // justifyContent: "center",
  height: 400px;

  @media screen and (max-width: 800px) {
    height: auto;
  }
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <h1>Habilidades:</h1>
          <ul>
            <li>Conhecimento intermediario em </li>
            <br />
            <li>Node js </li>
            <br />
            <li> React js</li>
            <br />
            <li>HTML</li>
            <br />
            <li>CSS</li>
          </ul>
          <div style={{ marginLeft: "60px" }}>
            <img
              style={{ marginRight: "30px" }}
              width="100"
              src={node}
              alt="node"
            />
            <img
              width="100"
              src={react}
              alt="node"
              style={{ marginRight: "30px" }}
            />
            <img
              width="100"
              src={html}
              alt="node"
              style={{ marginRight: "30px" }}
            />
            <img width="100" src={css} alt="node" />
          </div>
        </Wrapper>
      </Container>
    </>
  );
}

export default App;
