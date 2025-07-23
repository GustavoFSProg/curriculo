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
  width: 100vw;
  height: auto;
  background: lightblue;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 200px;
  overflow-x: hidden;

  @media screen and (max-width: 800px) {
    /* overflow-x: hidden; */
    width: 100%;
  }
`;

const Wrapper = styled.div`
  /* margin-top: -190px; */
  display: flex;

  width: 50%;
  align-items: center;
  padding: 30px;
  padding-bottom: 120px;
  padding-left: -30px;
  background: #4fabc9;
  justify-content: center;
  height: 400px;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100vw;
    overflow-x: hidden;
    margin-left: 47px;
  }
`;

const Imagens = styled.div`
  display: flex;
  margin-left: 60px;
  margin-top: 30px;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
    margin-left: -5px;
  }
`;

const Img = styled.img`
  width: 500px;
  /* margin-right: 30px; */

  @media screen and (max-width: 800px) {
    width: 290px;
    /* margin-left: -80px; */
  }
`;

const ContainerPages = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 70px;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media screen and (max-width: 800px) {
    margin-left: -5px;
  }
`;

function App() {
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        flexDirection: "column",
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <Container>
        <Wrapper>
          <div>
            <h1>Conhecimentos:</h1>
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
            <Imagens>
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
            </Imagens>
          </div>
        </Wrapper>
        <ContainerPages>
          <h1>Portfólio:</h1>
          <a href="https://new-blog-vite.netlify.app/">
            <Img src={blog} alt="node" />
          </a>

          <a href="https://jogoscello.com.br/">
            <Img
              src={jogos}
              alt="node"
              style={{
                marginTop: "50px",
              }}
            />
          </a>
        </ContainerPages>
      </Container>
    </div>
  );
}

export default App;
