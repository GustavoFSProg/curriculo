import foto from "../../assets/mina-foto-recente.png";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: auto;
  padding: 70px;
  background: lightgray;
  justify-content: center;

  @media screen and (max-width: 800) {
    flex-direction: column;
  }
`;

const Text = styled.div`
  display: flex;
  width: 300px;
  /* height: auto; */
  font-size: 20px;

  @media screen and (max-width: 800px) {
    /* flex-direction: column; */
    font-size: 18px;
    width: 220px;
    margin-left: -20px;
  }
`;

function Navbar() {
  return (
    <Container>
      <img
        src={foto}
        width="100"
        alt="foto"
        style={{ position: "absolute", left: 13, top: 13 }}
      />
      <Text>Gustavo Fernando Sohne</Text>
    </Container>
  );
}

export default Navbar;
