import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Main from "../pages/Main";

function Exhibiton() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { seq } = useParams();

  const getData = async () => {
    const json = await axios(`http://13.125.82.62/api/exhibition/${seq}`);
    setData(json);
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

export default Exhibiton;
