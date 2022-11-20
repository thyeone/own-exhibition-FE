import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import background from "../assets/background.jpg";
import arrow from "../assets/arrow.svg";

function Main() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token") == null) {
      navigate("/");
    }
  }, []);

  return (
    <Container>
      <VisualBox>
        <img src={background} className="background" />
        <h3 className="visualText">
          전시회 고민하지 말고,
          <br />
          너만의 전시회
        </h3>
        <img src={arrow} className="arrow" alt="scroll down" />
      </VisualBox>
    </Container>
  );
}

const Container = styled.div``;

const VisualBox = styled.section`
  height: 770px;
  /* height: 772px; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  background-blend-mode: darken;

  .arrow {
    margin-bottom: 41px;
    animation: down 1.5s infinite;
    opacity: 60%;
  }
  @keyframes down {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translateY(15px);
    }
    40% {
      transform: translate(0);
    }
  }

  @-webkit-keyframes down {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translateY(15px);
    }
    40% {
      transform: translate(0);
    }
  }

  .background {
    position: absolute;
    width: 100vw;
    height: 770px;
    top: 0;
    z-index: -10;
    background-position: center;
  }

  h3 {
    padding-top: 227px;
    font-weight: bold;
    font-size: 52px;
    line-height: 70px;
    text-align: center;
    color: white;
  }
`;

const List = styled.div`
  /* grid-template-columns: minmax(150px, 1fr) 2fr;
  grid-gap: 20px;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25);
  0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025); */
`;

export default Main;
