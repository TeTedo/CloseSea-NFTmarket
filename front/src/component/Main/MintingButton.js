import React, { useContext } from "react";
import { MintingBtn } from "./BackgroundStyled.";
import { Context } from "App";
const MintingButton = ({ mintAmount }) => {
  const { account, NFT } = useContext(Context);
  const minting = async () => {
    await NFT.instance.methods._minting(mintAmount).send({
      from: account,
    });
  };
  return <MintingBtn onClick={minting}>Going to do Minting</MintingBtn>;
};

export default MintingButton;
