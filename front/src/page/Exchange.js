import React from "react";
import {
  ExchangePosition,
  ExchangeTitle,
  ExchangeContent,
  SellBtn,
} from "component/exchange/ExchangeStyled";
import NftImg from "../image/index";
import ExchangeComponent from "component/exchange/ExchangeComponent";
import { useNavigate } from "react-router-dom";

const Exchange = () => {
  const navigate = useNavigate();
  const NFTContent = [];
  if (NftImg.length > 0) {
    for (let i = 0; i < NftImg.length; i++) {
      NFTContent.push(
        <ExchangeComponent
          img={NftImg[i]}
          onClick={() => {
            navigate("/nftbuy/" + i);
          }}
        />
      );
    }
  }
  return (
    <ExchangePosition>
      <ExchangeTitle>
        NFT Shop
        <SellBtn
          onClick={() => {
            navigate("/sell");
          }}
        >
          Sell
        </SellBtn>
      </ExchangeTitle>
      <ExchangeContent>
        {NFTContent.length > 0 ? NFTContent.map((e) => e) : null}
      </ExchangeContent>
    </ExchangePosition>
  );
};

export default Exchange;
