import styled from "styled-components";

const SellContent = styled.div`
	min-height: calc(100vh - 100px);
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 30px;
`;
const LeftImg = styled.img`
	margin-top: 20px;
	width: 700px;
	height: 700px;
	border-radius: 50px;
`;
const LeftContent = styled.div`
	margin-top: 2%;
	margin-left: auto;
	margin-right: auto;
`;
const RightContnent = styled.div`
	padding: 2.5% 2%;
`;
const RightTitle = styled.div`
	font-size: 50px;
	font-weight: 600;
`;
const RightSub = styled.div`
	margin-top: 10px;
	font-size: 20px;
	font-weight: 600;
	padding-bottom: 20px;
`;
const RightBuyContent = styled.div``;
const RightNftPropertiesText = styled.div`
	font-size: 40px;
	font-weight: 600;
	margin-bottom: 20px;
`;
const RightNftProperties = styled.div`
	padding: 10px;
	background-color: white;
	border: 5px solid black;
	border-radius: 20px;
	width: 600px;
	height: 250px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(2, 1fr);
	grid-gap: 10px;
`;
const RightBuyText = styled.div`
	margin: 20px 0;
	font-size: 30px;
	font-weight: 600;
`;
const RightBuyPrice = styled.div`
	font-size: 60px;
	font-weight: 600;
`;
const RightBuyBtn = styled.button`
	margin: 20px 0;
	padding: 10px 40px;
	font-size: 35px;
	font-weight: 600;
	border: 5px solid black;
	border-radius: 10px;
	background-color: white;
	transition: all 0.4s;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
	:hover {
		transform: scale(1.1);
		box-shadow: 0 7px 14px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
	}
`;
const PropertiesBox = styled.div`
	text-align: center;
	border: 1px solid rgb(24, 156, 244);
	background-color: rgba(24, 156, 244, 0.2);
	color: rgb(24, 156, 244);
	border-radius: 10px;
	padding: 5px;
	display: grid;
	align-items: center;
`;
const PropertiesTitle = styled.div`
	font-size: 14px;
`;
const PropertiesContent = styled.div`
	font-size: 16px;
	font-weight: 600;
	color: black;
`;
const PropertiesSub = styled.div`
	font-size: 16px;
	/* font-weight: 600; */
	color: rgba(0, 0, 0, 0.4);
`;

export {
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
	PropertiesBox,
	PropertiesTitle,
	PropertiesContent,
	PropertiesSub,
};
