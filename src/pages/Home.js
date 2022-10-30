import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;

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

function Home() {
  return <Container></Container>;
}

export default Home;
