import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
function Header() {
  return (
    <StyledHeader>
      <Link to="/">
        <StyledLogo>
          <img src={logo} alt="logo"></img>
          <h3>너만의 전시회</h3>
        </StyledLogo>
      </Link>
      <HeaderRight>
        <Link to="/Login">
          <p>로그인</p>
        </Link>
        <Link to="/Register">
          <p>회원가입</p>
        </Link>
        <Link to="/Mypage">
          <p>마이페이지</p>
        </Link>
      </HeaderRight>
    </StyledHeader>
  );
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
    width: 100px;
    height: 100px;
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
