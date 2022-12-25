import React, { useContext } from "react";
import { Context } from "App";
const SellButton = ({ tokenId, price, Com }) => {
  const { account, NFTtrade, NFT, setLoading } = useContext(Context);
  const sell = async () => {
    if (!tokenId) {
      alert("NFT를 선택해주세요.");
      return;
    }
    setLoading(true);
    let tempApprove = await NFT.instance.methods
      .isApprovedForAll(account, NFTtrade.CA)
      .call();
    if (!tempApprove) {
      tempApprove = await NFT.instance.methods
        .setApprovalForAll(NFTtrade.CA, true)
        .send({
          from: account,
        })
        .catch(() => {
          setLoading(false);
        });
    }
    if (!tempApprove) {
      alert("판매승인을 해주세요.");
    } else {
      const confirm = await NFTtrade.instance.methods
        .salesToken(tokenId, `${price * 10 ** 18}`)
        .send({ from: account })
        .catch(() => {
          setLoading(false);
        });
      if (confirm) {
        alert("등록에 성공하였습니다.");
      } else {
        alert("등록을 취소하였습니다.");
      }
    }
    setLoading(false);
  };
  return <Com onClick={sell}>Sell</Com>;
};

export default SellButton;
