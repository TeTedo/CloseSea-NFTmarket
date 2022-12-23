import React, { useContext } from "react";
import { NFTBuyBtn } from "./ExchangeStyled";
import { Context } from "App";
const BuyButton = () => {
  const { account, NftTrade } = useContext(Context);
  const buyNFT = () => {};
  return <NFTBuyBtn onClick={buyNFT}>⚡️Buy Now</NFTBuyBtn>;
};

export default BuyButton;
