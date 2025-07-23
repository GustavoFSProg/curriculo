import styled from "styled-components";
import whats from "../../assets/whats.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: auto;
  background: #006bb3;
  padding-top: 15px;
  padding-bottom: 25px;
  color: #b3e0ff;
  /* color: #808080; */
  position: absolute;
  margin-bottom: 0px;

  @media screen and (max-width: 850px) {
    width: 100%;
    position: relative;
    margin-top: 200px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background: green; */
  /* margin-left: -40px; */
  padding-top: 11px;
  padding-bottom: 11px;

  @media screen and (max-width: 850px) {
    /* width: 100%; */
    /* margin-left: -10px; */
  }
`;

const Span = styled.div`
  display: flex;
  font-size: 15px;
  /* letter-spacing: 10px; */
  justify-content: center;
  align-items: center;
  font-weight: none;

  @media screen and (max-width: 850px) {
    font-size: 14px;
  }
`;

export default function Footer() {
  return (
    <Container>
      <TitleContainer>
        <div
          style={{
            display: "flex",
            width: "300px",
            height: "auto",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ marginRight: "5px", marginTop: "5px" }}>
            <img src={whats} width="26" />
          </span>
          <Span>(51) 984-57-6589</Span>
        </div>
        <span
          style={{
            fontSize: "13px",
            fontStyle: "italic",
            marginTop: "6px",
          }}
        >
          10/07/2025
        </span>
      </TitleContainer>
    </Container>
  );
}
