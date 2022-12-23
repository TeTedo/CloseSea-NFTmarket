import React, { useContext, useEffect, useState } from "react";
import {
  ExchangePosition,
  ExchangeTitle,
  ExchangeContent,
  SellBtn,
} from "component/exchange/ExchangeStyled";
import ExchangeComponent from "component/exchange/ExchangeComponent";
import { useNavigate } from "react-router-dom";
import { Context } from "App";
import axios from "axios";
const Exchange = () => {
  const { NFTtrade } = useContext(Context);
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [listData, setListData] = useState([]);
  useEffect(() => {
    if (!NFTtrade) return;

    (async () => {
      const list = await NFTtrade.instance.methods.getSaleTokenList().call();
      setList(list);
    })();
  }, [NFTtrade]);
  useEffect(() => {
    if (!list.length) return;
    const temp = [];
    list.forEach(async (v) => {
      const tokenData = axios.get(`http://localhost/metaData/${v}`);
      temp.push({ ...tokenData.data, price: v.price, id: v.tokenId });
    });
    setListData(temp);
  }, [list]);
  return (
    <ExchangePosition>
      <ExchangeTitle>
        NFT Shop
        <SellBtn
          onClick={() => {
            navigate("/sell");
          }}
        >
          Sell
        </SellBtn>
      </ExchangeTitle>
      <ExchangeContent>
        {listData.map((v, idx) => (
          <ExchangeComponent id={v.id} key={idx} price={v.price} />
        ))}
      </ExchangeContent>
    </ExchangePosition>
  );
};

export default Exchange;
