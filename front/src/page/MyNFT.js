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
  RightBuyContent,
  RightBuyText,
  RightBuyPrice,
  RightBuyBtn,
  SellInput,
} from "component/NFTBuy/NFTBuyStyled";
import PropertiesComnent from "component/NFTBuy/PropertiesComnent";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "App";
import Button from "component/NFTBuy/Button";
import SellButton from "component/Sell/SellButton";
import metaData from "public/metadata.json";
function MyNFT() {
  const { NFT, account } = useContext(Context);
  const params = useParams();
  const id = params.id;
  const price = params.price;
  const [owner, setOwner] = useState();
  const [sellPrice, setSellPrice] = useState("");
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
        {owner && price === "0" ? (
          <>
            <div>
              <SellInput
                placeholder="price"
                onChange={(e) => {
                  setSellPrice(e.target.value);
                }}
              />
            </div>
            <SellButton tokenId={id} price={sellPrice} Com={RightBuyBtn} />
          </>
        ) : (
          <RightBuyContent>
            <RightBuyText>Current price</RightBuyText>
            <RightBuyPrice>{price / 10 ** 18} ZOL</RightBuyPrice>
            <Button id={id} type="cancel" />
          </RightBuyContent>
        )}
      </RightContnent>
    </SellContent>
  );
}

export default MyNFT;
