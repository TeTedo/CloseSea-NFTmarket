import React from "react";
const ConnectWalletBtn = ({ setAccount }) => {
  const getRequestAccount = async () => {
    const [account] = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    return account;
  };
  const connectWallet = async () => {
    const account = await getRequestAccount();
    setAccount(account);
    window.ethereum.on("accountsChanged", async () => {
      const account = await getRequestAccount();
      setAccount(account);
    });
  };

  return <div onClick={connectWallet}>지갑 연결</div>;
};

export default ConnectWalletBtn;
