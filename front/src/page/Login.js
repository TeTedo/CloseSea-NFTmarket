import React from "react";
import {
	TitleDiv,
	TextDiv,
	LoginInput,
	StyledButton,
	TitleText,
} from "component/login/LoginStyled";

const Login = () => {
	return (
		<TitleDiv>
			<TextDiv>
				<TitleText>Login</TitleText>
				<LoginInput placeholder="아이디"></LoginInput>
				<LoginInput placeholder="비밀번호" type="password"></LoginInput>
				<StyledButton>로그인</StyledButton>
			</TextDiv>
		</TitleDiv>
	);
};

export default Login;
