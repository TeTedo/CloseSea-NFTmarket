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
const Exchange = () => {
  const { NFTtrade, setLoading, account } = useContext(Context);
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [listData, setListData] = useState([]);
  useEffect(() => {
    if (!NFTtrade) return;
    setLoading(true);
    (async () => {
      const list = await NFTtrade.instance.methods
        .getSaleTokenList()
        .call()
        .catch(() => {
          alert("판매중인 NFT가 없습니다.");
          setLoading(false);
        });
      if (list) setList(list);
    })();
  }, [NFTtrade]);
  useEffect(() => {
    (() => {
      if (!list.length) return;
      const temp = [];
      list.forEach(async (v) => {
        temp.push({ price: v.price, id: v.tokenId });
      });
      setLoading(false);
      setListData(temp);
    })();
  }, [list]);
  return (
    <ExchangePosition>
      <ExchangeTitle>
        NFT Shop
        {account && (
          <SellBtn
            onClick={() => {
              navigate("/sell");
            }}
          >
            Sell
          </SellBtn>
        )}
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
