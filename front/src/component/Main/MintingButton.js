import React, { useContext } from "react";
import { MintingBtn } from "./BackgroundStyled.";
import { Context } from "App";
const MintingButton = () => {
  const { account, Token, NFT } = useContext(Context);
  const minting = async () => {
    const mintAmount = 0;
    const mintPrice = await NFT.instance.methods.getMintPrice().call();
    await NFT.instance.methods._minting(mintAmount).send({
      from: account,
    });
    await Token.instance.methods.mintNft(mintPrice, mintAmount).send({
      from: account,
    });
  };
  return <MintingBtn onClick={minting}>Going to do Minting</MintingBtn>;
};

export default MintingButton;
