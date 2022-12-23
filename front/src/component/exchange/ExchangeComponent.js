import React from "react";
import {
  NFTBox,
  NFTPicture,
  NFTNumber,
  NFTPrice,
  NFTPictureSize,
  NFTBuyBtn,
} from "./ExchangeStyled";
function ExchangeComponent(props) {
  return (
    <NFTBox onClick={props.onClick}>
      <NFTPictureSize>
        <NFTPicture src={`image${props.id}.png`} />
      </NFTPictureSize>
      <NFTNumber>{props.id}</NFTNumber>
      <NFTPrice>{props.price}</NFTPrice>
      <NFTBuyBtn>⚡️Buy Now</NFTBuyBtn>
    </NFTBox>
  );
}

export default ExchangeComponent;
