import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { Link } from "react-scroll";
import Map from "./Map";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  const getData = async () => {
    const json = await axios(`http://13.125.82.62/api/exhibition/${id}`);
    setData(json.data);
    setLoading(false);
    console.log(json);
  };
  useEffect(() => {
    getData();
    if (localStorage.getItem("token") == null) {
      navigate("/");
    }
  }, []);

  return loading ? (
    <LoadingPage>
      <span>Loading ... </span>
    </LoadingPage>
  ) : (
    <Wrapper>
      <Helmet>
        <title>{data.title}</title>
      </Helmet>
      <DetailArea>
        <ImgBox>
          <img src={data.thumbnail}></img>
        </ImgBox>
        <DescBox>
          <h3 className="title">{data.title}</h3>
          <div className="borderSolid"></div>
          <div className="desc">
            <p className="subTitle"> 카테고리 </p>
            <p className="content">{data.realmName}</p>
            <p className="subTitle">기간</p>
            <p className="content">
              {data.startDate}~{data.endDate}
            </p>
            <p className="subTitle">지역</p>
            <p className="content">{data.area === null ? "-" : data.area}</p>
            <p id="1" className="subTitle">
              장소
            </p>
            <Link to="1" spy={true} smooth={true}>
              <p className="place">{data.place}</p>
            </Link>
          </div>
        </DescBox>
      </DetailArea>
      <BottomContents>
        <span className="maptitle">지도</span>
        <KakaoMap>
          <Map data={data} />
        </KakaoMap>
      </BottomContents>
    </Wrapper>
  );
}

const LoadingPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 100;
  color: ${(props) => props.theme.textColor};
`;

const Wrapper = styled.div``;

const DetailArea = styled.div`
  padding: 150px 150px 50px 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgBox = styled.div`
  /* border: 1px solid #ececec; */
  img {
    width: 358px;
    height: 480px;
  }
`;

const DescBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 480px;
  margin-left: 50px;

  p {
    line-height: 25px;
    font-size: 14px;
  }
  .desc {
  }
  .title {
    font-size: 32px;
    font-weight: 600;
    font-family: "Spoqa Han Sans Neo", "sans-serif";
  }
  .subTitle {
    font-size: 16px;
    font-weight: 600;
  }
  .content {
    font-family: "Nanum Gothic", sans-serif;
  }
  .place {
    cursor: pointer;
    text-decoration: underline;
    color: #02b0da;
  }
  .borderSolid {
    display: block;
    width: 95%;
    margin: 20px 0;
    border-bottom: 1px solid rgb(0, 0, 0, 0.2);
  }
`;

const BottomContents = styled.div`
  .maptitle {
    display: block;
    font-weight: 600;
    text-align: center;
    margin-bottom: 10px;
  }
`;
const KakaoMap = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 40px;
`;

export default Detail;
