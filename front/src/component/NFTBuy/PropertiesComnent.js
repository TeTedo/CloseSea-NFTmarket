import React from "react";
import {
	PropertiesBox,
	PropertiesTitle,
	PropertiesContent,
	PropertiesSub,
} from "./NFTBuyStyled";

function PropertiesComnent(props) {
	return (
		<PropertiesBox>
			<PropertiesTitle>{props.title}</PropertiesTitle>
			<PropertiesContent>{props.content}</PropertiesContent>
			<PropertiesSub>24% have this trait</PropertiesSub>
		</PropertiesBox>
	);
}

export default PropertiesComnent;
