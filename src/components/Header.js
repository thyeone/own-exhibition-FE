import axios from "axios";
import { Link, useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";
import mypage from "../assets/mypage_icon.png";
import Logout from "./shared/Logout";
import { UserOutlined, ExportOutlined } from "@ant-design/icons";

function Header() {
  const loginMatch = useMatch("/");
  const registerMatch = useMatch("/register");
  const findPwMatch = useMatch("/findpw");
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("token");

  // const onLogout = () => {
  //   localStorage.clear();
  //   navigate("/");
  //   axios
  //     .post("http://13.125.82.62/api/logout/", {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       navigate("/");
  //     })
  //     .catch((error) => {
  //       console.log("로그아웃 실패", error);
  //     });
  // };

  return loginMatch !== null ||
    registerMatch !== null ||
    findPwMatch !== null ? null : (
    <StyledHeader>
      <Link to="/main">
        <StyledLogo>
          {/* <img src={logo2} alt="logo"></img> */}
          <h3>너만의 전시회</h3>
        </StyledLogo>
      </Link>
      <HeaderRight>
        {/* <button onClick={Logout}>로그아웃</button> */}
        <Link to="/Mypage">
          <UserOutlined className="mypage" />
        </Link>
        <ExportOutlined onClick={Logout} className="logout" />
      </HeaderRight>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  position: fixed;
  justify-content: space-between;
  width: 100%;
  margin: 34px 0 33px;
`;

const StyledLogo = styled.div`
  display: flex;
  margin-left: 50px;
  h3 {
    display: flex;
    margin-left: 12px;
    align-items: center;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    color: white;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  margin-right: 50px;
  column-gap: 22px;

  .mypage {
    font-size: 24px;
    cursor: pointer;
    color: #fff;
    &:hover {
      color: #bbbbbb;
    }
  }
  .logout {
    font-size: 24px;
    cursor: pointer;
    color: #fff;
    &:hover {
      color: #bbbbbb;
    }
  }
`;

export default Header;
