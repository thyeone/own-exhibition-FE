import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

function Detail() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  const getData = async () => {
    const json = await axios(`http://13.125.82.62/api/exhibition/${id}`);
    setData(json.data);
    console.log(json);
  };
  useEffect(() => {
    getData();
    if (localStorage.getItem("token") == null) {
      navigate("/");
    }
  }, []);

  return (
    <Wrapper>
      <InfoBox>
        <img src={data.thumbnail}></img>
        <h3>{data.title}</h3>
      </InfoBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: ${(props) => props.theme.bgColor};
  padding: 150px;
  h3 {
  }
`;

const InfoBox = styled.div`
  background-color: #fff;
`;

export default Detail;
