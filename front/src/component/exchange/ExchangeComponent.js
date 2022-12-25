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
    <NFTBox>
      <NFTPictureSize>
        <NFTPicture src={`/image/${props.id}.png`} />
      </NFTPictureSize>
      <NFTNumber>{props.id}번 쫄</NFTNumber>
      <NFTPrice>가격 : {props.price / 10 ** 18} ZOL</NFTPrice>
      <BuyButton id={props.id} price={props.price} />
    </NFTBox>
  );
}

export default ExchangeComponent;
