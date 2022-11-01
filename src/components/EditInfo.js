import { Link } from "react-router-dom";
import styled from "styled-components";
import user from "../assets/user.png";
function EditInfo() {
  return (
    <Container>
      <Editbox>
        <ProfileBox>
          <div className="myinfom">
            <h4>프로필</h4>
          </div>
          <div className="profile">
            <img src={user}></img>
            <div className="info">
              <h3>김태현</h3>
              <p>thyeonee@gmail.com</p>
            </div>
          </div>
          <div className="button">
            <EditProfile>취소</EditProfile>
            <Withdrawl>저장</Withdrawl>
          </div>
        </ProfileBox>
      </Editbox>
    </Container>
  );
}
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

const ProfileBox = styled.div`
  background-color: #303136;
  border-radius: 10px;
  width: 350px;
  height: 400px;
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
    padding: 40px 0 30px 0;
  }
  .info {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-left: 20px;
    margin-top: 10px;
    gap: 14px;
  }
  .button {
    display: flex;
    justify-content: center;
    padding-top: 20px;
  }
  .myinfom {
    color: white;
    font-size: 20px;
    font-weight: bold;
    margin-top: 15px;
  }
`;

const Container = styled.div``;

const Editbox = styled.div`
  background-color: #303136;
  border-radius: 10px;
  width: 500px;
  height: 800px;
  margin-left: 20px;
  justify-content: center;
  display: flex;
  margin: auto;
`;

export default EditInfo;
