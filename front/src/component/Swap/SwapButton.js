import React, { useContext } from "react";
import { SwapBtn } from "./SwapStyled";
import { Context } from "App";
const SwapButton = ({ up }) => {
  const { account, Token } = useContext(Context);

  const swap = async () => {
    if (up.sym === "ETH") {
      // 이더 -> ZOL 스왑
      await Token.instance.methods.buyToken().send({
        from: account,
        value: up.value * 10 ** 18,
      });
    } else {
      // ZOL -> 이더 스왑
      await Token.instance.methods.sellToken(`${up.value * 10 ** 18}`).send({
        from: account,
      });
    }
  };
  return <SwapBtn onClick={swap}>Swap</SwapBtn>;
};

export default SwapButton;
