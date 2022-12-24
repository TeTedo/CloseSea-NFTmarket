import React, { useContext, useEffect, useState } from "react";
import {
  MyPageContent,
  AccountText,
  CollectedContent,
  CollectedTitle,
} from "../component/MyPage/MypageSyled";
import NFTComponent from "component/MyPage/NFTComponent";
import { Context } from "App";
import { useNavigate } from "react-router-dom";
function Mypage() {
  const { account, NFTtrade, setAccount } = useContext(Context);
  const [list, setList] = useState([]);
  const [listData, setListData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (!NFTtrade) return;
    if (!account) return;
    (async () => {
      setList(
        await NFTtrade.instance.methods
          .getOwnerToken(localStorage.getItem("account"))
          .call()
      );
    })();
  }, [NFTtrade, account]);
  useEffect(() => {
    if (!list.length) return;
    const temp = [];
    list.forEach(async (v) => {
      temp.push({ price: v.price, id: v.tokenId });
    });
    setListData(temp);
  }, [list]);
  useEffect(() => {
    (async () => {
      const getAccount = localStorage.getItem("account");
      const [metaAccount] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      if (getAccount === metaAccount) {
        setAccount(getAccount);
      } else {
        navigate("/");
      }
    })();
  }, []);
  return (
    <MyPageContent>
      <AccountText>{account}</AccountText>
      <CollectedTitle>Collected</CollectedTitle>
      <CollectedContent>
        {listData.map((v, idx) => (
          <NFTComponent
            id={v.id}
            key={idx}
            price={v.price}
            onClick={() => {
              navigate(`/mynft/${v.id}/${v.price}`);
            }}
          />
        ))}
      </CollectedContent>
    </MyPageContent>
  );
}
export default Mypage;
