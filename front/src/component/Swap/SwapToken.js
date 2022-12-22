import React from "react";
import {
	SwapWrap,
	SwapTop,
	SwapMid,
	SwapCon,
	SymWrap,
	Logo,
	InputNum,
	SwapIcon,
	SwapBot,
	Fee,
	SwapBtn,
} from "./SwapStyled";
const SwapToken = () => {
	return (
		<SwapWrap>
			<SwapTop>Swap</SwapTop>
			<SwapMid>
				<SwapCon>
					<SymWrap>
						<Logo src="/ethLogo.jpg" />
						<span
							style={{
								marginLeft: "10px",
								fontSize: "20px",
								fontWeight: "bold",
							}}
						>
							ETH
						</span>
					</SymWrap>
					<InputNum type="number"></InputNum>
				</SwapCon>
				<SwapIcon>
					<i className="fa-solid fa-repeat fa-2x fa-rotate-90"></i>
				</SwapIcon>
				<SwapCon>
					<SymWrap>
						<Logo src="/ethLogo.jpg" />
						<span
							style={{
								marginLeft: "10px",
								fontSize: "20px",
								fontWeight: "bold",
							}}
						>
							ETH
						</span>
					</SymWrap>
					<InputNum type="number"></InputNum>
				</SwapCon>
			</SwapMid>
			<SwapBot>
				<Fee>
					<div>수수료</div>
					<div>5%</div>
				</Fee>
				<SwapBtn>Swap</SwapBtn>
			</SwapBot>
		</SwapWrap>
	);
};

export default SwapToken;
