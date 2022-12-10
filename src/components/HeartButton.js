import hearton from "../assets/img/ic_heart_on.svg";
import heartoff from "../assets/img/ic_heart.svg";
import styled from "styled-components";
import { useEffect } from "react";

const HeartButton = ({ data, like, setLike, LikeBtn, wish }) => {
  const arr = wish.map((like) => like.exhibition_id);

  const heartState = () => {
    arr.includes(data.id) ? setLike(true) : setLike(false);
  };

  useEffect(() => {
    heartState();
  }, [wish]);

  return <Heart src={like ? hearton : heartoff} onClick={LikeBtn} />;
};

const Heart = styled.img`
  width: 30px;
  margin-right: 30px;
  cursor: pointer;
`;

export default HeartButton;
