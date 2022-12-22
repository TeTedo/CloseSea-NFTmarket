import React, { useEffect } from "react";
import Web3 from "web3";
const ConnectWalletBtn = ({ setAccount, setWeb3 }) => {
  const connectWallet = async () => {
    try {
      const web3 = new Web3(Web3.givenProvider);
      const accounts = await web3.eth.requestAccounts();
      setAccount(accounts);
      setWeb3(web3);
      console.log(accounts, web3);
    } catch (err) {
      console.log("User cancelled");
      console.log(err);
    }
  };
  useEffect(() => {
    // 1
    window.addEventListener("load", async () => {
      let web3;
      // 2
      if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        // 3
      } else if (typeof window.web3 !== "undefined") {
        web3 = new Web3(window.web3.currentProvider);
      }
      if (web3) {
        // 5
        await web3.eth.requestAccounts();
      }
    });
  }, []);
  return <div onClick={connectWallet}>지갑 연결</div>;
};

export default ConnectWalletBtn;
