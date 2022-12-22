import React from "react";
import {
  NFTBox,
  NFTPicture,
  NFTNumber,
  NFTPrice,
  NFTPictureSize,
  NFTSubText,
} from "component/exchange/ExchangeStyled";

function NFTComponent(props) {
  return (
    <NFTBox>
      <NFTPictureSize>
        <NFTPicture src={props.img} />
      </NFTPictureSize>
      <NFTNumber>123</NFTNumber>
      <NFTPrice>0.8ETH</NFTPrice>
      <NFTSubText>Ends in 24hours</NFTSubText>
    </NFTBox>
  );
}

export default NFTComponent;
