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

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <MyPageBox>
        <ProfileBox>
          <div className="profile">
            <img src={user}></img>
          </div>
          <div className="info">
            <h3>{data.name}</h3>
            <p>{data.email}</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <p>비밀번호</p>
            <input
              {...register("password", { required: "항목을 입력해주세요" })}
              defaultValue="*******"
            />
            <span>{errors?.password?.message}</span>
            <p>비밀번호 확인</p>

            <input
              {...register("password1", { required: "항목을 입력해주세요" })}
              defaultValue="*******"
            />
            <span>{errors?.password1?.message}</span>
            <p>생년월일</p>
            <input
              {...register("birthday", { required: "항목을 입력해주세요" })}
            />
            <span>{errors?.birthday?.message}</span>
            <p>전화번호</p>
            <input
              {...register("phoneNum", { required: "항목을 입력해주세요" })}
            />
            <span>{errors?.phoneNum?.message}</span>
            <div>
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
const ProfileBox = styled.div`
  background-color: #303136;
  border-radius: 10px;
  width: 450px;
  height: 600px;
  margin-left: 20px;

  img {
    display: flex;
    width: 88px;
    height: 88px;
    cursor: pointer;
  }

  h3 {
    color: white;
    font-size: 20px;
    font-weight: bold;
  }

  p {
    color: white;
    margin: 13px;
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

  button {
    display: flex;
    justify-content: center;
    border-radius: 2px;
    cursor: pointer;
    background-color: #191919; /* Green */
    color: white;
    width: 80px;
    border-radius: 5px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 4px 2px;
    transition-duration: 0.4s;
    margin-top: 25px;
  }
  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
  }
  input {
    border: none;
    padding-bottom: 8px;

    border-radius: 5px;
    width: 250px;
    text-align: center;
  }
  button:hover {
    background-color: gray;
    color: white;
  }
`;

export default EditInfo;
