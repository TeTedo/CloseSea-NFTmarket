import React, { useContext } from "react";
import { SellBtn } from "./SellStyled";
import { Context } from "App";
const SellButton = ({ tokenId, price }) => {
  const { account, NFTtrade } = useContext(Context);
  const sell = async () => {
    await NFTtrade.instance.methods
      .salesToken(tokenId, `${price * 10 ** 18}`)
      .send({ from: account });
  };
  return <SellBtn onClick={sell}>Sell</SellBtn>;
};

export default SellButton;
