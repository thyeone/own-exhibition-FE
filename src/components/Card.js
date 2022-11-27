import { Link } from "react-router-dom";
import styled from "styled-components";

function Card(data) {
  return (
    <Exhibition>
      <Link key={data.seq} to={`/exhibition/${data.seq}`}>
        <Img src={data.thumbnail} />
        <p className="area">{data.area.length === 0 ? "서울" : data.area}</p>
        <p className="title">{data.title}</p>
        <p className="date">
          {data.startDate}~{data.endDate}
        </p>
      </Link>
    </Exhibition>
  );
}

const Exhibition = styled.li`
  margin-bottom: 100px;
  padding: 30px;
  border-radius: 5px;
  color: inherit;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);

  p {
    margin-top: 15px;
    color: #000;
  }

  .area {
  }

  .title {
    font-weight: bold;
    font-size: 18px;
  }

  .date {
    color: #777777;
    font-weight: 500;
    font-size: 15px;
  }
`;

const Img = styled.img`
  display: block;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  height: 270px;
  border-bottom: 1px solid #000;
  :hover {
    transition: all 0.4s;
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export default Card;
