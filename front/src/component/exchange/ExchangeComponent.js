import React from "react";
import {
  TestBox,
  NFTPicture,
  NFTNumber,
  NFTPrice,
  NFTPictureSize,
  NFTBuyBtn,
} from "./ExchangeStyled";
import img from "../../image/index";
function ExchangeComponent(props) {
  return (
    <TestBox onClick={props.onClick}>
      <NFTPictureSize>
        <NFTPicture src={props.img} />
      </NFTPictureSize>
      <NFTNumber>123</NFTNumber>
      <NFTPrice>0.8ETH</NFTPrice>
      <NFTBuyBtn>⚡️Buy Now</NFTBuyBtn>
    </TestBox>
  );
}

export default ExchangeComponent;
