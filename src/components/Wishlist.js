import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wishlist = ({ id }) => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const json = await axios(`http://13.125.82.62/api/exhibition/${id}`);
    setData(json.data);
    console.log(json.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Wrapper>
      <Line>
        <Link key={id} to={`/exhibition/${id}`}>
          <Img src={data.thumbnail} />
        </Link>
        <Link to={`/exhibition/${id}`}>
          <span className="title">{data.title}</span>
        </Link>
        <div className="right">
          <span className="date">
            {data.startDate}~{data.endDate}
          </span>
          <span className="place">{data.place}</span>
        </div>
      </Line>
      <div className="borderSolid"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: #fff;

  .right {
    display: block;
    text-align: center;
  }

  .borderSolid {
    display: block;
    margin: auto;
    padding-top: 15px;
    width: 95%;
    border-bottom: 1px solid rgb(255, 255, 255, 0.3);
  }

  .title {
    font-weight: 600;
  }
  .date {
    color: #999999;
    font-weight: 500;
    font-size: 15px;
    margin-right: 20px;
  }

  .place {
    line-height: 30px;
    display: block;
    font-weight: 600;
  }
`;

const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Img = styled.img`
  width: 90px;
  height: 120px;
  margin: 10px 0 0 20px;
`;

export default Wishlist;
