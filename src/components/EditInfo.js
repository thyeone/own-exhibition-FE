import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

function EditInfo() {
  const [data, setData] = useState([]);
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

  // const getData = async () => {
  //   const json = await axios(`http://13.125.82.62/api/users/${id}`);
  //   setData(json.data);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div>
      <div>
        <p>이름</p>
        <p>example@email.com</p>
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
        <input {...register("birthday", { required: "항목을 입력해주세요" })} />
        <span>{errors?.birthday?.message}</span>
        <p>전화번호</p>
        <input {...register("phoneNum", { required: "항목을 입력해주세요" })} />
        <span>{errors?.phoneNum?.message}</span>
        <button onClick={onCancle}>취소</button>
        <button>확인</button>
      </form>
    </div>
  );
}

export default EditInfo;
