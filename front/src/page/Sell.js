import React, { useState } from "react";
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
  MyNFTContent,
  SellCotent,
  MyNFTTitle,
  ChoiceNFT,
} from "component/Sell/SellStyled";
import NFTImg from "../image/index";
import { CollectedContent } from "component/MyPage/MypageSyled";

const Sell = () => {
  const [sellImg, setSellImg] = useState("");
  const MySrc = (e) => {
    setSellImg(e.target.src);
    console.log(e.target.src);
  };
  return (
    <SellCotent>
      <SellWrap>
        <SellTitleDiv>
          <SellLeftDiv>
            <SellIMG src={sellImg} />
          </SellLeftDiv>
          <SellRightDiv>
            <SellRightTitle>HIHI</SellRightTitle>
            <SellRightContent>Test</SellRightContent>
            <SellRightContent style={{ margin: "20px 0" }}>
              owner :
            </SellRightContent>
            <SellRightContent>
              <SellInput placeholder="price"></SellInput>
            </SellRightContent>
            <SellText></SellText>
            <SellBtn>Sell</SellBtn>
          </SellRightDiv>
        </SellTitleDiv>
      </SellWrap>
      <MyNFTContent>
        <MyNFTTitle>My Collected</MyNFTTitle>
        <CollectedContent>
          <ChoiceNFT src={NFTImg[0]} onClick={MySrc} />
          <ChoiceNFT src={NFTImg[1]} onClick={MySrc} />
          <ChoiceNFT src={NFTImg[2]} onClick={MySrc} />
          <ChoiceNFT src={NFTImg[3]} onClick={MySrc} />
          <ChoiceNFT src={NFTImg[4]} onClick={MySrc} />
          <ChoiceNFT src={NFTImg[5]} onClick={MySrc} />
        </CollectedContent>
      </MyNFTContent>
    </SellCotent>
  );
};

export default Sell;
