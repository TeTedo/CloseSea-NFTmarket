import React from "react";
import { useParams } from "react-router-dom";
import NftImg from "image/index";
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
	RightBuyBtn,
	RightNftProperties,
	RightNftPropertiesText,
} from "component/NFTBuy/NFTBuyStyled";
import PropertiesComnent from "component/NFTBuy/PropertiesComnent";

function NFTBuy() {
	const params = useParams();
	const id = params.id;
	return (
		<SellContent>
			<LeftContent>
				<LeftImg src={NftImg[id]} alt="" />
			</LeftContent>
			<RightContnent>
				<RightTitle>Mask Man #</RightTitle>
				<RightSub>Owned by (닉네임)</RightSub>

				<RightNftPropertiesText>Properties</RightNftPropertiesText>
				<RightNftProperties>
					<PropertiesComnent title="BACKGROUND" content="Blue" />
					<PropertiesComnent title="EYES" content="Smile" />
					<PropertiesComnent title="FACE" content="Blue" />
					<PropertiesComnent title="HEADER" content="Header" />
					<PropertiesComnent title="MOUSE" content="Smile" />
				</RightNftProperties>
				<RightBuyContent>
					<RightBuyText>Current price</RightBuyText>
					<RightBuyPrice>8.1123 ETH</RightBuyPrice>
					<RightBuyBtn>Buy</RightBuyBtn>
				</RightBuyContent>
			</RightContnent>
		</SellContent>
	);
}

export default NFTBuy;
