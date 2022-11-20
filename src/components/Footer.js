import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer">
        <div>
          <p>이용약관</p>
          <p>개인정보처리방침</p>
        </div>
        <p>Ⓒ2022 own-exhibition-team. All rights reserved.</p>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  width: 100%;
  background: #111111;
  /* height: 100%; */
  /* margin-top: 24px; */
  .footer {
    max-width: 1200px;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    color: white;
    div {
      display: flex;
      gap: 63px;
      align-items: center;
    }
    p {
      font-size: 15px;
    }
  }
`;

export default Footer;
