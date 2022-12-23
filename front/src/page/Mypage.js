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
  const { account, NFTtrade } = useContext(Context);
  const [list, setList] = useState([]);
  const [listData, setListData] = useState([]);
  const navigate = useNavigate();
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
      temp.push({ price: v.price, id: +v.tokenId + 1 });
    });
    setListData(temp);
  }, [list]);
  return (
    <MyPageContent>
      <AccountText>{account}</AccountText>
      <CollectedTitle>Collected</CollectedTitle>
      <CollectedContent>
        <NFTComponent
          id="1"
          key="1"
          price="0.8"
          onClick={() => {
            navigate("/mynft/" + 0);
          }}
        />
        {listData.map((v, idx) => (
          <NFTComponent
            id={v.id}
            key={idx}
            price={v.price}
            onClick={() => {
              navigate("/mynft/" + (v.id - 1));
            }}
          />
        ))}
      </CollectedContent>
    </MyPageContent>
  );
}
export default Mypage;
