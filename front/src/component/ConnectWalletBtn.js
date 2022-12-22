import React from "react";

const ConnectWalletBtn = () => {
  const connectWallet = () => {
    console.log("gd");
  };
  return <div onClick={connectWallet}>지갑 연결</div>;
};

export default ConnectWalletBtn;
