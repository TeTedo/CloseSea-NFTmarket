import "./App.css";
import Login from "./page/Login";
import Exchange from "./page/Exchange";
import Main from "page/Main";
import Swap from "page/Swap";
import SignUp from "page/SignUp";
import NFTBuy from "page/NFTBuy";
import Mypage from "page/Mypage";
import Sell from "./page/Sell";
import { Routes, Route } from "react-router-dom";
import { createContext, React, useEffect, useState } from "react";
import MenuBar from "component/MenuBar";
import Token from "contracts/Token.json";
import NFT from "contracts/NftToken.json";
import MyNFT from "page/MyNFT";
import NFTtrade from "contracts/NFTtrade.json";
import Web3 from "web3/dist/web3.min";
export const Context = createContext();
function App() {
  // 로그인 확인
  const [account, setAccount] = useState();
  const [web3, setWeb3] = useState();
  const tempArr = [];
  const [token, setToken] = useState();
  const [nft, setNft] = useState();
  const [nftTrade, setNftTrade] = useState();
  useEffect(() => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      setWeb3(web3);
    }
    (async () => {
      const getAccount = localStorage.getItem("account");
      const [metaAccount] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      if (getAccount === metaAccount) {
        setAccount(getAccount);
        window.ethereum.on("accountsChanged", async () => {
          const account = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          setAccount(account);
          localStorage.setItem("account", account);
        });
        setLoading(true);
        await window.ethereum
          .request({
            jsonrpc: "2.0",
            method: "wallet_switchEthereumChain",
            params: [{ chainId: "0x5" }],
          })
          .catch(() => {
            alert("goerli 네트워크에서만 사용가능");
          });
        setLoading(false);
        window.ethereum.on("chainChanged", async function (networkId) {
          if (networkId !== "0x5") {
            setLoading(true);
            await window.ethereum
              .request({
                id: 1,
                jsonrpc: "2.0",
                method: "wallet_switchEthereumChain",
                params: [{ chainId: "0x5" }],
              })
              .catch(() => {
                alert("goerli 네트워크에서만 사용가능");
              });
            setLoading(false);
          }
        });
      }
    })();
  }, []);

  useEffect(() => {
    const contracts = [Token, NFT, NFTtrade];
    (async () => {
      if (!web3) return;
      for (const contract of contracts) {
        const abi = contract.output.abi;
        const CA = contract.CA;
        const instance = await new web3.eth.Contract(abi, CA);
        tempArr.push({ instance, CA });
      }
      setToken(tempArr[0]);
      setNft(tempArr[1]);
      setNftTrade(tempArr[2]);
    })();
  }, [web3]);
  // 로딩 애니메이션 관련
  const [display, setDisplay] = useState(0);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (loading) {
      setDisplay("block");
    } else {
      setDisplay("none");
    }
  }, [loading]);
  // 이벤트 감지해서 로딩창 띄우기

  return (
    <div className="App">
      <div className="loading" style={{ display }}>
        <div>
          <img src="/loadingAnimation.gif" alt="" />
        </div>
      </div>
      <Context.Provider
        value={{
          account,
          web3,
          Token: token,
          NFT: nft,
          NFTtrade: nftTrade,
          setLoading,
          setAccount,
        }}
      >
        <MenuBar setAccount={setAccount} setWeb3={setWeb3} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/swap" element={<Swap />} />
          <Route path="/nftbuy/:id/:price" element={<NFTBuy />} />
          <Route path="/mynft/:id/:price" element={<MyNFT />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/sell" element={<Sell />} />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
