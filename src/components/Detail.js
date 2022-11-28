import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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

  return <h3>{data.title}</h3>;
}

export default Detail;
