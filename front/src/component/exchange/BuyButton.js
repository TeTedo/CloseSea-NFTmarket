import React from "react";
import { NFTBuyBtn } from "./ExchangeStyled";
import { useNavigate } from "react-router-dom";
const BuyButton = ({ id, price }) => {
  const navigate = useNavigate();
  return (
    <NFTBuyBtn
      onClick={() => {
        navigate(`/nftbuy/${id}/${price}`);
      }}
    >
      ⚡️Buy Now
    </NFTBuyBtn>
  );
};

export default BuyButton;
