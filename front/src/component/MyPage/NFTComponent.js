import React from "react";
import {
  NFTBox,
  NFTPicture,
  NFTNumber,
  NFTPrice,
  NFTPictureSize,
} from "component/exchange/ExchangeStyled";

function NFTComponent({ id, price, onClick }) {
  return (
    <NFTBox onClick={onClick}>
      <NFTPictureSize>
        <NFTPicture src={`/image/${id}.png`} />
      </NFTPictureSize>
      <NFTNumber>{id}번 쫄</NFTNumber>
      <NFTPrice>
        {price !== "0" ? `${price / 10 ** 18} ZOL에 판매중` : ""}
      </NFTPrice>
      {/* <NFTSubText>Ends in 24hours</NFTSubText> */}
    </NFTBox>
  );
}

export default NFTComponent;
