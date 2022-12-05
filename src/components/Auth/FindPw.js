import { useState } from "react";
import styled from "styled-components";

function FindPw() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthDate] = useState("");

  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onBirthDateHandler = (event) => {
    setBirthDate(event.currentTarget.value);
  };

  return (
    <Container>
      <RegisterBox>
        <Title>비밀번호 찾기</Title>
        <Form>
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
            type="text"
            name="bdate"
            placeholder="생년월일 입력 ex)1989.01.01"
            value={birthdate}
            onChange={onBirthDateHandler}
            minLength="8"
          ></Input>
          <Btn>확인</Btn>
        </Form>
      </RegisterBox>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vw;
  background-color: white;
`;

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
  font-weight: bold;
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
export default FindPw;
