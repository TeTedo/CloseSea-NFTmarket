import React from "react";
import {
  SellIMG,
  SellTitleDiv,
  SellLeftDiv,
  SellRightDiv,
  SellRightTitle,
  SellWrap,
  SellInput,
  SellText,
  SellRightContent,
} from "component/Sell/SellStyled";

const Sell = () => {
  return (
    <SellWrap>
      <SellTitleDiv>
        <SellLeftDiv>
          <SellIMG></SellIMG>
        </SellLeftDiv>
        <SellRightDiv>
          <SellRightTitle>HIHI</SellRightTitle>
          <SellRightContent></SellRightContent>
          <SellText></SellText>
          <SellInput></SellInput>
        </SellRightDiv>
      </SellTitleDiv>
    </SellWrap>
  );
};

export default Sell;
