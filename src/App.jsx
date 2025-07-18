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
import blog from "./assets/novo-blog.jpg";
import jogos from "./assets/jogos-cello.jpg";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  background: lightblue;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 200px;
`;

const Wrapper = styled.div`
  /* margin-top: -190px; */

  width: 50%;
  align-items: center;
  padding: 30px;
  padding-bottom: 120px;
  // paddingLeft: "130",
  background: #4fabc9;
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
          <h1>Conhecimento:</h1>
          <ul style={{ fontSize: "21px" }}>
            <br />
            <li>Node js </li>
            <br />
            <li> React js</li>
            <br />
            <li>HTML</li>
            <br />
            <li>CSS</li>
          </ul>
          <br />
          <div style={{ marginLeft: "60px", marginTop: "30px" }}>
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "70px",
          }}
        >
          <h1>Portfólio:</h1>
          <a href="https://new-blog-vite.netlify.app/">
            <img
              width="500"
              src={blog}
              alt="node"
              style={{ marginRight: "30px" }}
            />
          </a>

          <a href="https://jogoscello.com.br/">
            <img
              width="500"
              src={jogos}
              alt="node"
              style={{
                marginRight: "30px",

                marginTop: "50px",
              }}
            />
          </a>
        </div>
      </Container>
    </>
  );
}

export default App;
