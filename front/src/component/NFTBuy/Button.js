import React, { useContext } from "react";
import { Context } from "App";
import { RightBuyBtn } from "./NFTBuyStyled";
import { useNavigate } from "react-router-dom";
const Button = ({ id, type }) => {
  const { account, NFTtrade, setLoading } = useContext(Context);
  const navigate = useNavigate();
  const handler = async () => {
    if (!account) return;
    type === "buy" ? buy() : cancel();
  };
  const buy = async () => {
    if (confirm("정말 구매 하시겠습니까?")) {
      setLoading(true);
      const confirm = await NFTtrade.instance.methods
        .purchaseToken(id)
        .send({
          from: account,
        })
        .catch(() => {
          setLoading(false);
        });

      if (confirm) {
        alert("구매가 완료되었습니다.");
        setLoading(false);
        navigate("/mypage");
      }
    }
    setLoading(false);
  };
  const cancel = async () => {
    if (confirm("정말 취소 하시겠습니까?")) {
      setLoading(true);
      const confirm = await NFTtrade.instance.methods
        .popSaleToken(id)
        .send({
          from: account,
        })
        .catch(() => {
          setLoading(false);
        });

      if (confirm) {
        alert("판매가 취소 되었습니다.");
        setLoading(false);
        navigate("/mypage");
      }
    }
    setLoading(false);
  };
  return <RightBuyBtn onClick={handler}>{type}</RightBuyBtn>;
};

export default Button;
