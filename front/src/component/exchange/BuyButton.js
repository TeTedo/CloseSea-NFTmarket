import React, { useContext } from "react";
import { NFTBuyBtn } from "./ExchangeStyled";
import { Context } from "App";
const BuyButton = () => {
  const { account, NftTrade } = useContext(Context);
  const buyNFT = async () => {
    await NftTrade.instance.methods.purchaseToken();
    console.log(account);
  };
  return <NFTBuyBtn onClick={buyNFT}>⚡️Buy Now</NFTBuyBtn>;
};

export default BuyButton;
