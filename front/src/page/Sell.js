import React, { useContext, useEffect, useState } from "react";
import {
  SellIMG,
  SellTitleDiv,
  SellLeftDiv,
  SellRightDiv,
  SellRightTitle,
  SellWrap,
  SellInput,
  SellRightContent,
  MyNFTContent,
  SellCotent,
  MyNFTTitle,
  ChoiceNFT,
  SellBtn,
} from "component/Sell/SellStyled";
import SellButton from "component/Sell/SellButton";
import { CollectedContent } from "component/MyPage/MypageSyled";
import { Context } from "App";
import { useNavigate } from "react-router-dom";
const Sell = () => {
  const [sellImg, setSellImg] = useState("");
  const [tokenId, setTokenId] = useState("");
  const [price, setPrice] = useState("");
  const { account, NFTtrade, setAccount } = useContext(Context);
  const [list, setList] = useState([]);
  const [listData, setListData] = useState([]);
  const navigate = useNavigate();
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
  useEffect(() => {
    if (!NFTtrade) return;
    if (!account) return;
    (async () => {
      const list = await NFTtrade.instance.methods
        .getOwnerToken(localStorage.getItem("account"))
        .call()
        .catch(() => alert("보유중인 nft가 없습니다."));
      if (list) setList(list);
    })();
  }, [NFTtrade, account]);
  useEffect(() => {
    if (!list.length) return;
    let temp = [];
    list.forEach(async (v) => {
      temp.push({ price: v.price, id: v.tokenId });
    });
    // 판매리스트에 올라간것들은 빼고 보여주기
    (async () => {
      temp = temp.filter((v) => v.price === "0");
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
            <SellIMG src={sellImg || `/scan.gif`} />
          </SellLeftDiv>
          <SellRightDiv>
            <SellRightTitle>
              {tokenId ? `${tokenId === "0" ? 100 : tokenId}번 쫄` : ""}
            </SellRightTitle>
            <SellRightContent>ZOL</SellRightContent>
            <SellRightContent style={{ margin: "20px 0" }}>
              owner : Me
            </SellRightContent>
            <SellRightContent>
              <SellInput
                placeholder="price"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              ></SellInput>
            </SellRightContent>
            <SellButton tokenId={tokenId} price={price} Com={SellBtn} />
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
