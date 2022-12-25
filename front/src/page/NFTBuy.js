import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  SellContent,
  LeftImg,
  LeftContent,
  RightContnent,
  RightTitle,
  RightSub,
  RightBuyContent,
  RightBuyText,
  RightBuyPrice,
  RightNftProperties,
  RightNftPropertiesText,
} from "component/NFTBuy/NFTBuyStyled";
import PropertiesComnent from "component/NFTBuy/PropertiesComnent";
import { Context } from "App";
import Button from "component/NFTBuy/Button";
import metaData from "public/metadata.json";
function NFTBuy() {
  const { NFT, account } = useContext(Context);
  const params = useParams();
  const id = params.id;
  const price = params.price;
  const [owner, setOwner] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      if (!NFT) return;
      const owner = await NFT.instance.methods.ownerOf(id).call();
      setOwner(owner);
    })();
  }, [NFT]);
  useEffect(() => {
    if (!account) navigate("/");
  }, []);
  return (
    <SellContent>
      <LeftContent>
        <LeftImg src={`/image/${id}.png`} alt="" />
      </LeftContent>
      <RightContnent>
        <RightTitle>Mask Man #{id === "0" ? "100" : id}</RightTitle>
        <RightSub>Owned by {owner}</RightSub>
        <RightNftPropertiesText>Properties</RightNftPropertiesText>
        <RightNftProperties>
          {metaData[id].attributes.map((v, idx) => (
            <PropertiesComnent
              key={idx}
              title={v.trait_type}
              content={v.value}
            />
          ))}
        </RightNftProperties>
        <RightBuyContent>
          <RightBuyText>Current price</RightBuyText>
          <RightBuyPrice>{price / 10 ** 18} ZOL</RightBuyPrice>
          {owner && account === owner.toLowerCase() ? (
            <Button id={id} type="cancel" />
          ) : account ? (
            <Button id={id} type="buy" />
          ) : (
            ""
          )}
        </RightBuyContent>
      </RightContnent>
    </SellContent>
  );
}

export default NFTBuy;
