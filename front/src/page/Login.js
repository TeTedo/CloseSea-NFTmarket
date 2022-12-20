import React from "react";
import { TitleDiv, TextDiv, LoginInput } from "component/login/LoginStyled";

const Login = () => {
  return (
    <TitleDiv>
      <TextDiv>
        <LoginInput></LoginInput>
        <LoginInput></LoginInput>
      </TextDiv>
    </TitleDiv>
  );
};

export default Login;
