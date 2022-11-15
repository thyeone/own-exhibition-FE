import { Link, useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo2 from "../assets/logo2.png";
import Logout from "./shared/Logout";
import mypage from "../assets/mypage_icon.png";

function Header() {
  const loginMatch = useMatch("/");
  const registerMatch = useMatch("/register");
  const findPwMatch = useMatch("/findpw");
  const navigate = useNavigate();
  return loginMatch !== null ||
    registerMatch !== null ||
    findPwMatch !== null ? null : (
    <StyledHeader>
      <Link to="/main">
        <StyledLogo>
          <img src={logo2} alt="logo"></img>
          <h3>너만의 전시회</h3>
        </StyledLogo>
      </Link>
      <HeaderRight>
        <button onClick={Logout}>로그아웃</button>
        <Link to="/Mypage">
          <img src={mypage} alt="mypage" />
        </Link>
      </HeaderRight>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 15px 0 33px;
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
  p {
    margin-left: 10px;
    font-size: 14px;
  }
  button {
    background-color: #303136;
    color: white;
    border: none;
    border-radius: 7px;
    padding: 10px;
    margin-right: 24px;
  }
  img {
    width: 28px;
    height: 28px;
  }
`;

export default Header;
