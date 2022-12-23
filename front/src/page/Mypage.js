import React, { useContext, useEffect, useState } from "react";
import {
  MyPageContent,
  AccountText,
  CollectedContent,
  CollectedTitle,
} from "../component/MyPage/MypageSyled";
import NFTComponent from "component/MyPage/NFTComponent";
import NFTImg from "../image/index";
import { Context } from "App";
import axios from "axios";
function Mypage() {
  const { account, NFTtrade } = useContext(Context);
  const [list, setList] = useState([]);
  const [listData, setListData] = useState([]);
  useEffect(() => {
    if (!NFTtrade) return;
    if (!account) return;
    (async () => {
      setList(await NFTtrade.instance.methods.getOwnerToken(account).call());
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
    <MyPageContent>
      <AccountText>{account}</AccountText>
      <CollectedTitle>Collected</CollectedTitle>
      <CollectedContent>
        <NFTComponent img={NFTImg[1]} />
        <NFTComponent img={NFTImg[1]} />
        <NFTComponent img={NFTImg[1]} />
        {listData.map((v, idx) => (
          <NFTComponent id={v.id} key={idx} price={v.price} />
        ))}
      </CollectedContent>
    </MyPageContent>
  );
}
export default Mypage;
