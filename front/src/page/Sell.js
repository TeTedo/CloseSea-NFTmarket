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
  SellBtn,
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
          <SellRightContent>Test</SellRightContent>
          <SellRightContent
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            by TTTT
          </SellRightContent>
          <SellRightContent>
            <SellInput placeholder="price"></SellInput>
          </SellRightContent>
          <SellText></SellText>
          <SellBtn>Sell</SellBtn>
        </SellRightDiv>
      </SellTitleDiv>
    </SellWrap>
  );
};

export default Sell;
