import foto from "../../assets/mina-foto-recente.png";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: auto;
  padding: 50px;
  background: lightgray;
  justify-content: center;

  @media screen and (max-width: 800) {
    flex-direction: column;
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
      <div>
        <h2>Gustavo Fernando Sohne</h2>
      </div>
    </Container>
  );
}

export default Navbar;
