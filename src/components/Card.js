import { Link } from "react-router-dom";
import styled from "styled-components";

function Card(data) {
  // 날짜 밀리세컨드 변환
  // endImminent <= 12096000000 : 14일 이내
  const today = Date.now();
  const endDate = new Date(data.endDate);
  const getTime = endDate.getTime();
  const endImminent = getTime - today;

  return (
    <Exhibition>
      <Link key={data.id} to={`/exhibition/${data.id}`}>
        <Img src={data.thumbnail} />
        <p className="area">{data.area === null ? "서울" : data.area}</p>
        <p className="title">{data.title}</p>
        <p className="date">
          {data.startDate}~{data.endDate}
        </p>
        <p className="endImminent">
          {endImminent <= 1209600000 ? "종료 임박" : null}
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
  .endImminent {
    color: red;
  }
`;

const Img = styled.img`
  display: block;
  margin-bottom: 30px;
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
