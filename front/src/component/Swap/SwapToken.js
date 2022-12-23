import React, { useEffect, useRef, useState } from "react";
import {
  SwapWrap,
  SwapTop,
  SwapMid,
  SwapCon,
  SymWrap,
  Logo,
  InputNum,
  SwapIcon,
  SwapBot,
  Fee,
} from "./SwapStyled";
import SwapButton from "./SwapButton";
import ZOLsym from "image/4.png";
const SwapToken = () => {
  const [pos, setPos] = useState(true);
  const [up, setUp] = useState({});
  const [down, setDown] = useState({});
  const value1 = useRef();
  const value2 = useRef();
  const change = () => {
    const sym = pos ? "ETH" : "ZOL";
    const counter = !pos ? "ETH" : "ZOL";
    setUp({ sym: counter, value: value2.current.value });
    setDown({ sym, value: value1.current.value });
    setPos(!pos);
  };
  const input1 = () => {
    const sym = pos ? "ETH" : "ZOL";
    const counter = !pos ? "ETH" : "ZOL";
    setUp({ sym, value: value1.current.value });
    value2.current.value = pos
      ? (value1.current.value * 1000 * 95) / 100
      : (value1.current.value * 95) / (1000 * 100);
    setDown({ sym: counter, value: value2.current.value });
  };
  const input2 = () => {
    const sym = !pos ? "ETH" : "ZOL";
    const counter = pos ? "ETH" : "ZOL";
    setDown({ sym, value: value2.current.value });
    value1.current.value = !pos
      ? (value2.current.value * 1000 * 95) / 100
      : (value2.current.value * 95) / (1000 * 100);
    setUp({ sym: counter, value: value1.current.value });
  };
  useEffect(() => {
    const temp = value1.current.value;
    value1.current.value = value2.current.value;
    value2.current.value = temp;
  }, [pos]);
  useEffect(() => {
    const sym = pos ? "ETH" : "FRT";
    setUp({ sym, value: 0 });
    value1.current.focus();
  }, []);
  return (
    <SwapWrap>
      <SwapTop>Swap</SwapTop>
      <SwapMid>
        <SwapCon>
          <SymWrap>
            <Logo src={pos ? "/ethLogo.jpg" : ZOLsym} />
            <span
              style={{
                marginLeft: "10px",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              {pos ? "ETH" : "ZOL"}
            </span>
          </SymWrap>
          <InputNum type="number" ref={value1} onChange={input1} min="0" />
        </SwapCon>
        <SwapIcon onClick={change}>
          <i className="fa-solid fa-repeat fa-2x fa-rotate-90"></i>
        </SwapIcon>
        <SwapCon>
          <SymWrap>
            <Logo src={!pos ? "/ethLogo.jpg" : ZOLsym} />
            <span
              style={{
                marginLeft: "10px",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              ZOL
            </span>
          </SymWrap>
          <InputNum type="number" ref={value2} onChange={input2} />
        </SwapCon>
      </SwapMid>
      <SwapBot>
        <Fee>
          <div>수수료</div>
          <div>5%</div>
        </Fee>
        <SwapButton up={up} down={down} />
      </SwapBot>
    </SwapWrap>
  );
};

export default SwapToken;
