import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <StyledHeader>
      <Link to="/">
        <StyledLogo>로고</StyledLogo>
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
  margin: 34px 0 33px;
  padding-bottom: 30px;
  background-color: white;
  border-bottom: 1px solid #dbdee2;
`;

const StyledLogo = styled.div`
  margin-left: 50px;
  display: flex;
`;

const HeaderRight = styled.div`
  display: flex;
  margin-right: 30px;
  p {
    margin-left: 10px;
    font-size: 14px;
  }
`;

export default Header;
