import React, { useContext, useEffect, useState } from "react";
import {
  SellContent,
  LeftImg,
  LeftContent,
  RightContnent,
  RightTitle,
  RightSub,
  RightNftProperties,
  RightNftPropertiesText,
} from "component/NFTBuy/NFTBuyStyled";
import PropertiesComnent from "component/NFTBuy/PropertiesComnent";
import { useParams } from "react-router-dom";
import { Context } from "App";
function MyNFT() {
  const { NFT } = useContext(Context);
  const parmas = useParams();
  const id = parmas.id;
  const [owner, setOwner] = useState();
  useEffect(() => {
    (async () => {
      if (!NFT) return;
      const owner = await NFT.instance.methods.findTokenOwner(id).call();
      setOwner(owner);
    })();
  }, [NFT]);
  return (
    <SellContent>
      <LeftContent>
        <LeftImg src={`/image/${id}.png`} alt="" />
      </LeftContent>
      <RightContnent>
        <RightTitle>Mask Man #{id}</RightTitle>
        <RightSub>Owned by {owner}</RightSub>
        <RightNftPropertiesText>Properties</RightNftPropertiesText>
        <RightNftProperties>
          <PropertiesComnent title="BACKGROUND" content="Blue" />
          <PropertiesComnent title="EYES" content="Smile" />
          <PropertiesComnent title="FACE" content="Blue" />
          <PropertiesComnent title="HEADER" content="Header" />
          <PropertiesComnent title="MOUSE" content="Smile" />
        </RightNftProperties>
      </RightContnent>
    </SellContent>
  );
}

export default MyNFT;
