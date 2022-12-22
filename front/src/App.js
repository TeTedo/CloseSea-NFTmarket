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
export const Context = createContext();
function App() {
  // 로그인 확인
  const [account, setAccount] = useState();
  const [web3, setWeb3] = useState();
  const tempObj = {};
  useEffect(() => {
    const contracts = [Token, NFT, NFTtrade];
    (async () => {
      for (const contract of contracts) {
        tempObj[contract] = "";
        const methods =
          contract.output.contracts[`${contract}.sol`][contract].devdoc.methods;
        tempObj[contract].methods = methods;
      }
    })();
  }, []);
  return (
    <div className="App">
      <Context.Provider
        value={{
          account,
          web3,
          Token: tempObj.Token,
          NFT: tempObj.NFT,
          NFTtrade: tempObj.NFTtrade,
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
