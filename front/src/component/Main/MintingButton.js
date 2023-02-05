import React, { useContext } from "react";
import { MintingBtn } from "./BackgroundStyled.";
import { Context } from "App";
const MintingButton = ({ mintAmount }) => {
  const { account, NFT, setLoading } = useContext(Context);
  const minting = async () => {
    if (mintAmount === 0) {
      alert("민트 수량을 입력해주세요.");
      return;
    }
    setLoading(true);
    await NFT.instance.methods
      ._minting(mintAmount)
      .send({
        from: account,
      })
      .then(() => {
        alert("민팅 성공!");
      })
      .catch(() => {
        alert("민팅 실패");
      });
    setLoading(false);
  };
  return <MintingBtn onClick={minting}>Going to do Minting</MintingBtn>;
};

export default MintingButton;
