import React from "react";
import {
  NFTBox,
  NFTPicture,
  NFTNumber,
  NFTPrice,
  NFTPictureSize,
} from "./ExchangeStyled";
import BuyButton from "./BuyButton";
function ExchangeComponent(props) {
  return (
    <NFTBox onClick={props.onClick}>
      <NFTPictureSize>
        <NFTPicture src={`/image/${props.id}.png`} />
      </NFTPictureSize>
      <NFTNumber>{props.id}번 쫄</NFTNumber>
      <NFTPrice>가격 : {props.price / 10 ** 18} ZOL</NFTPrice>
      <BuyButton id={props.id} />
    </NFTBox>
  );
}

export default ExchangeComponent;
