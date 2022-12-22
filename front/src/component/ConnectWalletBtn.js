import React from "react";
import Web3 from "web3/dist/web3.min.js";
const ConnectWalletBtn = ({ setAccount, setWeb3 }) => {
  const getRequestAccount = async () => {
    const [account] = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    return account;
  };
  const connectWallet = async () => {
    const account = await getRequestAccount();
    const web3 = new Web3(window.ethereum);
    setAccount(account);
    setWeb3(web3);
  };
  return <div onClick={connectWallet}>지갑 연결</div>;
};

export default ConnectWalletBtn;
