import React, { useContext } from "react";
import { MintingBtn } from "./BackgroundStyled.";
import { Context } from "App";
const MintingButton = () => {
  const { Token, NFT } = useContext(Context);
  const minting = async () => {
    const mintAmount = 0;
    const mintPrice = await NFT.methods.getMintPrice();
    await NFT.methods._minting(mintAmount);
    await Token.methods.mintNft(mintPrice, mintAmount);
  };
  return <MintingBtn onClick={minting}>Going to do Minting</MintingBtn>;
};

export default MintingButton;
