import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import user from "../assets/user.png";

function EditInfo() {
  const [data, setData] = useState([]);
  const accessToken = localStorage.getItem("token");
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const { id } = useParams();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    if (data.password !== data.password1) {
      setError(
        "password1",
        { message: "Password ard not the same." },
        { shouldFocus: true }
      );
    }
    setError("extraError", { message: "오류 발생" });
  };
  console.log(errors);
  const onCancle = () => {
    navigate("/mypage");
  };

  const getData = async () => {
    const json = await axios(`http://13.125.82.62/api/userinfo/`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    setData(json.data.user);
    console.log(json);
  };

  // useEffect(() => {
  //   getData();
  //   if (localStorage.getItem("token") == null) {
  //     navigate("/");
  //   }
  // }, []);

  return (
    <Container>
      <MyPageBox>
        <ProfileBox>
          <Profile>
            <div className="profile">
              <img src={user}></img>
            </div>
            <div className="info">
              <h3>{data.name}</h3>
              <p>{data.email}</p>
            </div>
          </Profile>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Textbox>
              <p>비밀번호</p>
              <input
                {...register("password", { required: "항목을 입력해주세요" })}
                defaultValue="*******"
              />
            </Textbox>

            <Textbox>
              <span>{errors?.password?.message}</span>
              <p>비밀번호 확인</p>

              <input
                {...register("password1", { required: "항목을 입력해주세요" })}
                defaultValue="*******"
              />
            </Textbox>

            <Textbox>
              <span>{errors?.password1?.message}</span>
              <p>생년월일</p>
              <input
                {...register("birthday", { required: "항목을 입력해주세요" })}
              />
            </Textbox>

            <div className="message">
              <p>{errors?.birthday?.message}</p>
            </div>
            <Textboxs>
              <p>전화번호</p>
              <input
                {...register("phoneNum", { required: "항목을 입력해주세요" })}
              />

              <div className="message">
                <p>{errors?.phoneNum?.message}</p>
              </div>
            </Textboxs>

            <div className="button">
              <button onClick={onCancle}>취소</button>
              <button>확인</button>
            </div>
          </form>
        </ProfileBox>
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
const Profile = styled.div`
  background-color: #303136;
`;
const Textbox = styled.div`
  padding-bottom: 10px;

  width: 100%;
  border-top: 2px solid #545454;
`;
const Textboxs = styled.div`
  padding-bottom: 10px;

  width: 100%;
  border-top: 2px solid #545454;
  border-bottom: 2px solid #545454;
`;

const ProfileBox = styled.div`
  background-color: white;
  border-radius: 5px;
  width: 450px;
  height: 680px;
  margin-left: 20px;
  border-top: solid;
  border-bottom: solid;
  border-left: solid;
  border-right: solid;

  img {
    display: flex;
    width: 88px;
    height: 88px;
    cursor: pointer;
  }
  h3 {
    color: black;
    font-size: 20px;
    font-weight: bold;
  }

  p {
    color: black;
    margin: 13px;
    font-weight: bold;
    text-align: center;
  }
  .profile {
    display: flex;
    justify-content: center;
    padding: 50px 0 30px 0;
  }
  .info {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }
  .message p {
    color: red;
    font-size: 10px;
  }
  button {
    display: inline-block;
    justify-content: center;
    border-radius: 2px;
    cursor: pointer;
    background-color: #191919; /* Green */
    color: white;
    width: 80px;
    border-radius: 5px;
    text-align: center;
    text-decoration: none;
    margin: 4px 2px;
    transition-duration: 0.4s;
    margin-top: 25px;

    //margin-right: 100px;
  }
  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  input {
    border: none;
    padding-bottom: 8px;
    border-radius: 5px;
    width: 250px;
    text-align: center;
    border-bottom: solid;
    border-top: solid;
    border-right: solid;
    border-left: solid;
    margin-left: 100px;
  }
  button:hover {
    background-color: gray;
    color: white;
  }
  .button {
    position: absolute;
    margin-top: 450px;
  }

  .button button {
  }
`;

export default EditInfo;
