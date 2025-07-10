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
  /* height: auto; */
  font-size: 20px;
  margin-bottom: 17px;

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
        width="122"
        alt="foto"
        style={{ position: "absolute", left: 16, top: 16 }}
      />
      <div stle={{ flexDirection: "column", alignItems: "center" }}>
        <Text>Gustavo Fernando Sohne</Text>
        <Text style={{ fontSize: "16px", marginLeft: "10px" }}>
          gustavosohne38@gmail.com
        </Text>
      </div>
    </Container>
  );
}

export default Navbar;
