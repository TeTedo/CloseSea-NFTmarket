import React from "react";
import {
  TitleDiv,
  HeaderWrap,
  HeaderContent,
  HeaderImage,
  BodyWrap,
  BodyContent,
} from "component/exchange/ExchangeStyled";
import TempNFT from "../image/Temp_NFT.png";

const Exchange = () => {
  return (
    <TitleDiv>
      <HeaderWrap>
        테스트헤더
        <HeaderContent>헤더컨텐트</HeaderContent>
        <HeaderImage src={TempNFT}></HeaderImage>
      </HeaderWrap>
      <BodyWrap>
        <BodyContent>바디컨텐트</BodyContent>
      </BodyWrap>
    </TitleDiv>
  );
};

export default Exchange;
