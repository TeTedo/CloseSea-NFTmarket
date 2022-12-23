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
  return (
    <div className="App">
      <Context.Provider
        value={{
          account,
          web3,
          Token: token,
          NFT: nft,
          NFTtrade: nftTrade,
        }}
      >
        <MenuBar setAccount={setAccount} setWeb3={setWeb3} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/swap" element={<Swap />} />
          <Route path="/nftbuy/:id" element={<NFTBuy />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/sell" element={<Sell />} />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
