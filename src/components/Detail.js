import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { Link } from "react-scroll";
import Map from "./Map";
import hearton from "../assets/img/ic_heart_on.svg";
import heartoff from "../assets/img/ic_heart.svg";
import { heartAtom } from "../atom";
import { useRecoilValue, useSetRecoilState } from "recoil";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const accessToken = localStorage.getItem("token");
  const isLike = useRecoilValue(heartAtom);
  const setHeartAtom = useSetRecoilState(heartAtom);
  const toggleHeart = () => setHeartAtom((prev) => !prev);
  const today = Date.now();
  const endDate = new Date(data.endDate);
  const getTime = endDate.getTime();
  const endImminent = getTime - today;

  const LikeBtn = () => {
    axios
      .post(`http://13.125.82.62/api/toggle-wish/${id}`, accessToken, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        console.log(response);
        toggleHeart();
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
          <h3 className="title">
            {data.title}
            <HeartBtn
              src={isLike ? hearton : heartoff}
              alt="like"
              onClick={LikeBtn}
            />
          </h3>
          <div className="borderSolid"></div>
          <div className="desc">
            <p className="subTitle"> 카테고리 </p>
            <p className="content">{data.realmName}</p>
            <p className="date">기간</p>
            <p className="content">
              {data.startDate}~{data.endDate}
            </p>
            <p className="endImminent">
              {endImminent <= 1209600 ? "(종료 임박)" : "여유"}
            </p>
            <p className="subTitle">지역</p>
            <p className="content">{data.area === null ? "-" : data.area}</p>
            <p id="1" className="subTitle">
              장소
            </p>
            <Link to="1" spy={true} smooth={true}>
              <p className="place">{data.place}</p>
            </Link>
            <span className="maptitle">지도</span>
            <KakaoMap>
              <Map data={data} />
            </KakaoMap>
          </div>
        </DescBox>
      </DetailArea>
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
  padding: 150px 150px 250px 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgBox = styled.div`
  img {
    width: 358px;
    height: 480px;
  }
`;

const HeartBtn = styled.img`
  width: 30px;
  margin-right: 30px;
  cursor: pointer;
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
    display: flex;
    justify-content: space-between;
    font-size: 32px;
    font-weight: 600;
    font-family: "Spoqa Han Sans Neo", "sans-serif";
  }
  .subTitle {
    font-size: 16px;
    font-weight: 600;
  }
  .date {
    font-size: 16px;
    font-weight: 600;
  }
  .endImminent {
    color: red;
    font-weight: 600;
    font-size: 12px;
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
    border-bottom: 1px solid ${(props) => props.theme.borderColor};
  }

  .maptitle {
    display: flex;
    font-weight: 600;
    margin: 10px 0;
  }
`;

const KakaoMap = styled.div`
  display: flex;
  /* justify-content: center; */
  padding-bottom: 40px;
`;

export default Detail;
