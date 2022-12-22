import React from "react";
import {
	TitleCotent,
	SignupTitle,
	SignupInput,
	SignupBtn,
} from "component/SignUp/SignUpStyled";
function SignUp() {
	return (
		<div>
			<TitleCotent>
				<SignupTitle>Sign Up</SignupTitle>
				<SignupInput placeholder="아이디" />
				<SignupInput placeholder="비밀번호" type="password" />
				<SignupInput placeholder="닉네임" />
				<SignupBtn>회원가입</SignupBtn>
			</TitleCotent>
		</div>
	);
}

export default SignUp;
