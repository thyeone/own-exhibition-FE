import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo2 from "../assets/logo2.png";
import Logout from "./shared/Logout";

function Header() {
  const path = window.location.pathname;
  const navigate = useNavigate();
  return path !== "/" ? (
    <StyledHeader>
      <Link to="/">
        <StyledLogo>
          <img src={logo2} alt="logo"></img>
          <h3>너만의 전시회</h3>
        </StyledLogo>
      </Link>
      <HeaderRight>
        <button onClick={Logout}>로그아웃</button>
        <Link to="/Mypage">
          <p>마이페이지</p>
        </Link>
      </HeaderRight>
    </StyledHeader>
  ) : null;
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 32px;
  padding-bottom: 22px;
  background-color: white;
`;

const StyledLogo = styled.div`
  display: flex;
  margin-left: 50px;
  /* padding-top: 20px; */
  img {
    width: 102px;
    height: 102px;
  }
  h3 {
    display: flex;
    margin-left: 12px;
    align-items: center;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
  padding-top: 20px;
  p {
    margin-left: 10px;
    font-size: 14px;
  }
`;

export default Header;
