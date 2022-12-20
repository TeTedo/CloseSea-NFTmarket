import React from "react";
import {
  TitleDiv,
  TextDiv,
  LoginInput,
  StyledButton,
} from "component/login/LoginStyled";

const Login = () => {
  return (
    <TitleDiv>
      <TextDiv>
        <LoginInput placeholder="아이디"></LoginInput>
        <LoginInput placeholder="비밀번호"></LoginInput>
        <StyledButton>로그인</StyledButton>
      </TextDiv>
    </TitleDiv>
  );
};

export default Login;
