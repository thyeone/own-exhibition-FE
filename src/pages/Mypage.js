import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import user from "../assets/img/user.png";

function MyPage() {
  const [data, setData] = useState([]);
  const accessToken = localStorage.getItem("token");
  const navigate = useNavigate();
  const onEditInfo = () => {
    navigate("/mypage/update");
  };
  const onSignOut = () => {
    axios
      .delete("http://13.125.82.62/api/delete/", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        console.log(res);
        localStorage.clear();
        navigate("/");
      })
      .catch((error) => {
        alert("회원탈퇴 실패");
        console.log("회원탈퇴 실패", error);
      });
  };
  const getData = async () => {
    const json = await axios.get(`http://13.125.82.62/api/userinfo/`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    setData(json.data.user);
    console.log(json);
  };

  useEffect(() => {
    getData();
    if (localStorage.getItem("token") == null) {
      navigate("/");
    }
  }, []);

  return (
    <Container>
      <Helmet>
        <title>마이페이지</title>
      </Helmet>
      <MyPageBox>
        <ProfileBox>
          <div className="profile">
            <img src={user} alt="profile"></img>
          </div>
          <div className="info">
            <h3>{data.name}</h3>
            <p>{data.email}</p>
          </div>
          <div className="button">
            <EditProfile onClick={onEditInfo}>내 정보 수정</EditProfile>
            <Withdrawl onClick={onSignOut}>회원 탈퇴</Withdrawl>
          </div>
        </ProfileBox>
        <WishlistBox>
          <WishlistHeader>
            <h3>찜한 전시(0)</h3>
            <p>페이지</p>
          </WishlistHeader>
        </WishlistBox>
      </MyPageBox>
    </Container>
  );
}

const Container = styled.div`
  min-height: 864px;
  padding: 126px 0 78px 0;
`;

const MyPageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
`;

const ProfileBox = styled.div`
  background-color: #34353a;
  border-radius: 10px;
  width: 350px;
  height: 400px;
  margin-left: 20px;

  img {
    display: flex;
    width: 88px;
    height: 88px;
  }

  h3 {
    color: white;
    font-size: 20px;
    font-weight: bold;
  }

  p {
    color: white;
  }

  .profile {
    display: flex;
    justify-content: center;
    padding: 80px 0 30px 0;
  }

  .info {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }

  .button {
    display: flex;
    justify-content: center;
    padding-top: 20px;
  }
`;

const EditProfile = styled.button`
  border-radius: 5px;
  width: 33%;
  height: 40px;
  background-color: #58a6ff;
  border: none;
  color: white;
  font-size: 14px;
  cursor: pointer;
`;

const Withdrawl = styled.button`
  border-radius: 5px;
  width: 33%;
  height: 40px;
  background-color: #58a6ff;

  border: none;
  color: white;
  font-size: 14px;
  margin-left: 10px;
  cursor: pointer;
`;

const WishlistBox = styled.div`
  background-color: #303136;
  border-radius: 10px;
  width: 700px;
  height: 400px;
  margin-left: 50px;
  padding: 32px;
`;

const WishlistHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #303136;
  border-bottom: 1px solid #545454;
  height: 40px;
  margin: 0 20px;
  h3 {
    color: white;
    font-size: 18px;
    font-weight: 600;
  }
  p {
    font-size: 12px;
    line-height: 18px;
    color: #cccccc;
  }
`;

export default MyPage;
