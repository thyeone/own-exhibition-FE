import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;

const RegisterBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  max-width: 550px;
  background-color: white;
  padding: 50px;
  box-shadow: 0 10px 30px rgb(25 25 25 / 50%);
`;

const Title = styled.h1`
  text-align: center;
  color: #609ff1;
  text-transform: uppercase;
  font-weight: bolder;
  letter-spacing: 1px;
  font-size: 24px;
  padding: 10px;
  margin-bottom: 20px;
`;

const Form = styled.form``;

const Input = styled.input`
  font-size: 14px;
  padding: 10px;
  margin-bottom: 10px;
  /* border-radius: 5px; */
  /* border: none;
   */
  background-color: rgba(25, 25, 25, 0.05);
  border: 2px solid transparent;
  width: 100%;
  box-sizing: border-box;
`;

const Btn = styled.button`
  font-size: 14px;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  background-color: #609ff1;
  border: none;
  width: 100%;
`;

function Register() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pwcheck, setPwCheck] = useState("");
  const [birthdate, setBirthDate] = useState("");
  const [phonenum, setPhoneNum] = useState("");

  const navigate = useNavigate();

  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPw(event.currentTarget.value);
  };

  const onPasswordCheckHandler = (event) => {
    setPwCheck(event.currentTarget.value);
  };

  const onBirthDateHandler = (event) => {
    setBirthDate(event.currentTarget.value);
  };

  const onPhoneNum = (event) => {
    setPhoneNum(event.currentTarget.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://13.125.82.62/api/users")
      .then((response) => setPw === setPwCheck)
      ? navigate("/Login")
      : alert("비밀번호를 확인해주세요.");
  };

  useEffect(() => {});

  return (
    <Container>
      <RegisterBox>
        <Title>회원가입</Title>
        <Form onSubmit={onSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="이름 입력"
            value={name}
            onChange={onNameHandler}
          ></Input>
          <Input
            type="email"
            name="email"
            placeholder="이메일 입력"
            value={email}
            onChange={onEmailHandler}
          ></Input>
          <Input
            autoComplete="on"
            type="password"
            name="pw"
            placeholder="비밀번호 입력"
            value={pw}
            onChange={onPasswordHandler}
            minLength="8"
          ></Input>
          <Input
            autoComplete="on"
            type="password"
            name="pw"
            placeholder="비밀번호 확인(8자리 이상)"
            value={pwcheck}
            onChange={onPasswordCheckHandler}
            minLength="8"
          ></Input>
          <Input
            type="text"
            name="bdate"
            placeholder="생년월일 입력 ex)1989.01.01"
            value={birthdate}
            onChange={onBirthDateHandler}
            minLength="8"
          ></Input>
          <Input
            type="text"
            name="phonenum"
            placeholder="전화번호 입력 ex)010-1234-1234"
            value={phonenum}
            onChange={onPhoneNum}
          ></Input>
          <Btn type="submit">가입하기</Btn>
        </Form>
      </RegisterBox>
    </Container>
  );
}

export default Register;
