import { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import CatBtn from "./CatBtn";

function Categories({ data }) {
  const [activeCat, setActiveCat] = useState("전체");
  const [datas, setDatas] = useState(data);

  useEffect(() => {
    activeCat === "전체"
      ? setDatas(data)
      : setDatas(data.filter((item) => item.realmName === activeCat));
  }, [activeCat]);

  return (
    <>
      <ButtonWrapper>
        <CatBtn
          name="전체"
          catActive={activeCat === "전체" ? true : false}
          handleSetCat={setActiveCat}
        />
        <CatBtn
          name="미술"
          catActive={activeCat === "미술" ? true : false}
          handleSetCat={setActiveCat}
        />
        <CatBtn
          name="연극"
          catActive={activeCat === "연극" ? true : false}
          handleSetCat={setActiveCat}
        />
        <CatBtn
          name="기타"
          catActive={activeCat === "기타" ? true : false}
          handleSetCat={setActiveCat}
        />
      </ButtonWrapper>

      <CardList>
        {datas.map((data, i) => (
          <Card
            key={i}
            {...data}
            // id={data.id}
            // thumbnail={data.thumbnail}
            // title={data.title}
            // area={data.area}
            // startDate={data.startDate}
            // endDate={data.endDate}
          />
        ))}
      </CardList>
      {/* <CardList>
        {datas.map((data, i) => (
              <Cards data={...data} key={i} />
        ))}
      </CardList> */}
    </>
  );
}

const CardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(300px, 1fr));
  grid-gap: 20px;
  padding: 50px;
`;

const ButtonWrapper = styled.div`
  margin: 10px 0 0 15px;
`;

export default Categories;
