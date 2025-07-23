import foto from "../../assets/mina-foto-recente.png";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: auto;
  padding: 60px;
  background: lightgray;
  justify-content: center;

  @media screen and (max-width: 800) {
    flex-direction: column;
  }
`;

const Text = styled.div`
  display: flex;
  width: 300px;
  height: auto;
  font-size: 20px;
  margin-bottom: 17px;
  justify-content: center;
  align-items: center;

  font-size: 16px;
  margin-left: 10px;

  @media screen and (max-width: 800px) {
    /* flex-direction: column; */
    font-size: 13.5px;
    width: 220px;
    margin-left: -20px;
    margin-bottom: 7px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 800px) {
    /* flex-direction: column; */
    font-size: 10px;
    width: 220px;
    margin-left: -20px;
    margin-top: -30px;
  }
`;

const Foto = styled.img`
  width: 122px;
  position: absolute;
  left: 16px;
  top: 16px;
  @media screen and (max-width: 800px) {
    width: 70px;
    /* position: relative; */
  }
`;

const Git = styled.span`
  margin-right: 8px;
  @media screen and (max-width: 800px) {
    display: none;
    /* position: relative; */
  }
`;

function Navbar() {
  return (
    <Container>
      <Foto src={foto} alt="foto" />
      <TextContainer>
        <Text>Gustavo Fernando Sohne</Text>
        <Text>gustavosohne38@gmail.com</Text>
        <Text>
          <Git>Github:</Git>
          <a
            style={{ textDecoration: "none" }}
            href="https://github.com/GustavoFSProg"
          >
            https://github.com/GustavoFSProg
          </a>
        </Text>
      </TextContainer>
    </Container>
  );
}

export default Navbar;
