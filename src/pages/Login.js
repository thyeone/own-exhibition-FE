import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const navigate = useNavigate();

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPw(event.currentTarget.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://13.125.82.62/api/login/", {
        email: email,
        password: pw,
      })
      .then((res) => {
        // console.log(res);
        localStorage.setItem("id", res.data.id);
        localStorage.setItem("token", res.data.token);
        navigate("/main");
      })
      .catch((error) => {
        alert("로그인 실패");
        console.log("로그인 실패", error);
      });
  };
  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      navigate("/main");
    }
  }, []);
  return (
    <Container>
      <LoginBox>
        <Title>로그인</Title>
        <Login_Form onSubmit={onSubmit}>
          <Input
            type="email"
            name="email"
            placeholder="이메일"
            value={email}
            onChange={onEmailHandler}
          ></Input>
          <Input
            autoComplete="on"
            type="password"
            name="pw"
            placeholder="비밀번호"
            value={pw}
            onChange={onPasswordHandler}
          ></Input>
          <LoginBtn>로그인</LoginBtn>
        </Login_Form>
        <Link to="/Register">
          <SignupBtn>회원가입</SignupBtn>
        </Link>
        <Link to="/FindPw">
          <FindPw>비밀번호 찾기</FindPw>
        </Link>
      </LoginBox>
    </Container>
  );
}

const Container = styled.div``;

const LoginBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  width: auto;
  background-color: white;
  padding: 50px;
  box-shadow: 0 10px 30px rgb(25 25 25 / 50%);
`;

const Title = styled.h1`
  text-align: center;
  color: #609ff1;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 32px;
  font-weight: bold;
  /* padding: 10px; */
  margin-bottom: 15px;
`;

const Login_Form = styled.form``;

const Input = styled.input`
  font-size: 14px;
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  box-sizing: border-box;
  background-color: rgba(25, 25, 25, 0.05);
  border: 2px solid transparent;
  border-radius: 5px;
`;

const LoginBtn = styled.button`
  font-size: 14px;
  color: #fff;
  padding: 10px;
  background-color: #609ff1;
  border: none;
  border-radius: 5px;
  width: 100%;
`;

const SignupBtn = styled.button`
  margin-top: 15px;
  border: none;
  padding: 10px;
  color: gray;
  transition-duration: 0.4s;
  &:hover {
    background-color: gray;
    color: white;
  }
`;

const FindPw = styled.span`
  float: right;
  font-size: 13px;
  color: #58a6ff;
  padding: 10px;
`;
export default Login;
