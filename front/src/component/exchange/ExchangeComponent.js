import React from "react";
import {
  TestBox,
  NFTPicture,
  NFTNumber,
  NFTPrice,
  NFTPictureSize,
  NFTBuyBtn,
} from "./ExchangeStyled";
function ExchangeComponent(props) {
  return (
    <TestBox onClick={props.onClick}>
      <NFTPictureSize>
        <NFTPicture src={`image${props.id}.png`} />
      </NFTPictureSize>
      <NFTNumber>{props.id}</NFTNumber>
      <NFTPrice>{props.price}</NFTPrice>
      <NFTBuyBtn>⚡️Buy Now</NFTBuyBtn>
    </TestBox>
  );
}

export default ExchangeComponent;
