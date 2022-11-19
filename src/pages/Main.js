import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import background from "../assets/background.jpg";

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
        <img src={background} />
        <h3 className="visualText">
          문구
          <br />
          너만의 전시회
        </h3>
      </VisualBox>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 120px;
`;
const VisualBox = styled.section`
  height: 772px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  img {
    position: absolute;
    width: 100vw;
    height: 890px;
    top: 0;
    z-index: -10;
    background-position: center;
    background-size: cover;

    /* position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -2; */
  }
  h3 {
    padding-top: 227px;
    font-weight: bold;
    font-size: 56px;
    line-height: 70px;
    text-align: center;
    color: white;
  }
`;

const Header = styled.div`
  position: fixed;
  top: 0;
  margin-top: 40px;
  padding-bottom: 30px;
  width: 100%;
  border-bottom: 1px solid #efefef;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-left: 30px;
`;

const Btn = styled.button``;

const RightHeader = styled.div`
  float: right !important;
  color: #666;
  margin-right: 30px;
`;

const LoginTab = styled.span`
  margin-left: 10px;
  font-size: 15px;
`;

const List = styled.div`
  /* grid-template-columns: minmax(150px, 1fr) 2fr;
  grid-gap: 20px;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25);
  0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025); */
`;

export default Main;
