import styled from "styled-components";

const TitleCotent = styled.div`
	position: absolute;
	top: 55%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 500px;
	height: 600px;
	border: 5px solid black;
	border-radius: 50px;
	padding: 20px;
	background-color: #79c2f2;
	display: grid;
	grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
	align-items: center;
`;
const SignupTitle = styled.div`
	text-align: center;
	font-size: 70px;
	font-weight: 600;
`;
const SignupInput = styled.input`
	margin-left: auto;
	margin-right: auto;
	width: 400px;
	height: 30px;
	font-size: 20px;
	padding: 10px;
	border: 0;
	border: 3px solid black;
	border-radius: 10px;
`;
const SignupBtn = styled.button`
	font-size: 20px;
	width: 400px;
	border: 3px solid black;
	border-radius: 10px;
	margin-left: auto;
	margin-right: auto;
	background-color: white;
	padding: 10px;
`;

export { TitleCotent, SignupTitle, SignupInput, SignupBtn };
