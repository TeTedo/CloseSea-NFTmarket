import React, { useContext, useEffect, useState } from "react";
import {
  MyPageContent,
  AccountText,
  CollectedContent,
  CollectedTitle,
} from "../component/MyPage/MypageSyled";
import NFTComponent from "component/MyPage/NFTComponent";
import { Context } from "App";
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
      temp.push({ price: v.price, id: v.tokenId });
    });
    setListData(temp);
  }, [list]);
  return (
    <MyPageContent>
      <AccountText>{account}</AccountText>
      <CollectedTitle>Collected</CollectedTitle>
      <CollectedContent>
        {listData.map((v, idx) => (
          <NFTComponent id={v.id} key={idx} price={v.price} />
        ))}
      </CollectedContent>
    </MyPageContent>
  );
}
export default Mypage;
