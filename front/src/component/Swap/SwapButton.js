import React, { useContext } from "react";
import { SwapBtn } from "./SwapStyled";
import { Context } from "App";
const SwapButton = ({ up }) => {
  const { account, Token, setLoading } = useContext(Context);

  const swap = async () => {
    setLoading(true);
    if (up.sym === "ETH") {
      // 이더 -> ZOL 스왑
      await Token.instance.methods
        .buyToken()
        .send({
          from: account,
          value: up.value * 10 ** 18,
        })
        .then(() => {
          alert("교환 성공!");
        })
        .catch(() => {
          alert("교환 실패!");
        });
    } else {
      // ZOL -> 이더 스왑
      await Token.instance.methods
        .sellToken(`${up.value * 10 ** 18}`)
        .send({
          from: account,
        })
        .then(() => {
          alert("교환 성공!");
        })
        .catch(() => {
          alert("교환 실패!");
        });
    }
    setLoading(false);
  };
  return <SwapBtn onClick={swap}>Swap</SwapBtn>;
};

export default SwapButton;
