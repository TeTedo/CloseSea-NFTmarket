import React, { useContext, useEffect, useState } from "react";
import {
  SellIMG,
  SellTitleDiv,
  SellLeftDiv,
  SellRightDiv,
  SellRightTitle,
  SellWrap,
  SellInput,
  SellText,
  SellRightContent,
  MyNFTContent,
  SellCotent,
  MyNFTTitle,
  ChoiceNFT,
} from "component/Sell/SellStyled";
import SellButton from "component/Sell/SellButton";
import { CollectedContent } from "component/MyPage/MypageSyled";
import { Context } from "App";
const Sell = () => {
  const [sellImg, setSellImg] = useState("");
  const [tokenId, setTokenId] = useState("");
  const [price, setPrice] = useState("");
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
    let temp = [];
    list.forEach(async (v) => {
      temp.push({ price: v.price, id: +v.tokenId + 1 });
    });
    // 판매리스트에 올라간것들은 빼고 보여주기
    (async () => {
      let list = await NFTtrade.instance.methods.getSaleTokenList().call();
      list = list.map((v) => +v.tokenId + 1);
      temp = temp.filter((v) => !list.includes(v.id));
    })();
    setListData(temp);
  }, [list]);
  const MySrc = (e) => {
    setTokenId(e.target.dataset.id);
    setSellImg(e.target.src);
  };
  return (
    <SellCotent>
      <SellWrap>
        <SellTitleDiv>
          <SellLeftDiv>
            <SellIMG src={sellImg} />
          </SellLeftDiv>
          <SellRightDiv>
            <SellRightTitle>{tokenId ? `${tokenId}번 쫄` : ""}</SellRightTitle>
            <SellRightContent>ZOL</SellRightContent>
            <SellRightContent style={{ margin: "20px 0" }}>
              owner : {account.slice(0, 5)}...{account.slice(37)}
            </SellRightContent>
            <SellRightContent>
              <SellInput
                placeholder="price"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              ></SellInput>
            </SellRightContent>
            <SellText></SellText>
            <SellButton tokenId={tokenId} price={price} />
          </SellRightDiv>
        </SellTitleDiv>
      </SellWrap>
      <MyNFTContent>
        <MyNFTTitle>My Collected</MyNFTTitle>
        <CollectedContent>
          {listData.map((v, idx) => (
            <ChoiceNFT
              key={idx}
              src={`/image/${v.id}.png`}
              onClick={MySrc}
              data-id={v.id}
            />
          ))}
        </CollectedContent>
      </MyNFTContent>
    </SellCotent>
  );
};

export default Sell;
