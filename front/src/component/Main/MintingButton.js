import React, { useContext } from "react";
import { MintingBtn } from "./BackgroundStyled.";
import { Context } from "App";
const MintingButton = ({ mintAmount }) => {
  const { account, NFT, setLoading } = useContext(Context);
  const minting = async () => {
    setLoading(true);
    await NFT.instance.methods
      ._minting(mintAmount)
      .send({
        from: account,
      })
      .catch(() => {
        setLoading(false);
      });
    setLoading(false);
  };
  return <MintingBtn onClick={minting}>Going to do Minting</MintingBtn>;
};

export default MintingButton;
