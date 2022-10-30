import styled from "styled-components";
import user from "../assets/user.png";

function MyPage() {
  return (
    <Container>
      <MyPageBox>
        <ProfileBox>
          <div className="profile">
            <img src={user}></img>
          </div>
          <div className="info">
            <h3>김태현</h3>
            <p>thyeonee@gmail.com</p>
          </div>
          <div className="button">
            <EditProfile>내 정보 수정</EditProfile>
            <Withdrawl>회원 탈퇴</Withdrawl>
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

const Container = styled.div``;

const MyPageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileBox = styled.div`
  background-color: #303136;
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
  background-color: #191919;
  border: none;
  color: white;
  font-size: 14px;
`;

const Withdrawl = styled.button`
  border-radius: 5px;
  width: 33%;
  height: 40px;
  background-color: #191919;
  border: none;
  color: white;
  font-size: 14px;
  margin-left: 10px;
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
