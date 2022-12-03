import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import background from "../assets/img/background.jpg";
import arrow from "../assets/img/arrow.svg";
import axios from "axios";
import { Helmet } from "react-helmet";
import Exhibition from "../components/Exhibition";

function Main() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    const json = await axios(`http://13.125.82.62/api/exhibition`);
    setData(json.data.data);
    setLoading(false);
    console.log(json);
  };
  useEffect(() => {
    getData();
    if (localStorage.getItem("token") == null) {
      navigate("/");
    }
  }, []);

  return loading ? (
    <Container>
      <Helmet>
        <title>너만의 전시회</title>
      </Helmet>
      <VisualBox>
        <img src={background} className="background" alt="background" />
        <h3 className="visualText">
          전시회 고민하지 말고,
          <br />
          '너만의 전시회'
        </h3>
        <img src={arrow} className="arrow" alt="scroll down" />
      </VisualBox>

      <LoadingPage>
        <span>Loading ...</span>
      </LoadingPage>
    </Container>
  ) : (
    <Container>
      <Helmet>
        <title>너만의 전시회</title>
      </Helmet>
      <VisualBox>
        <img src={background} className="background" alt="background" />
        <h3 className="visualText">
          전시회 고민하지 말고,
          <br />
          '너만의 전시회'
        </h3>
        <img src={arrow} className="arrow" alt="scroll down" />
      </VisualBox>
      <Wrapper>
        <div className="searchTab">
          <Title>현재 전시</Title>
        </div>
        <Exhibition data={data} />
      </Wrapper>
    </Container>
  );
}

const LoadingPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 100;
  color: ${(props) => props.theme.textColor};
`;

const Container = styled.div``;

const VisualBox = styled.section`
  height: 770px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  background-blend-mode: darken;

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
    font-weight: 600;
    font-size: 52px;
    line-height: 70px;
    text-align: center;
    color: ${(props) => props.theme.bgColor};
  }

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
`;

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};

  .searchTab {
    padding: 10px;
  }

  .borderSolid {
    display: block;
    margin: auto;
    padding-top: 15px;
    width: 95%;
    border-bottom: 1px solid rgb(0, 0, 0, 0.2);
  }
`;

const Title = styled.h3`
  font-size: 22px;
  font-weight: 600;
  padding: 50px 0 0 30px;
`;

export default Main;
