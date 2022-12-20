import styled from "styled-components";

const TitleDiv = styled.div`
  background-color: #189cf4;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const TextDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  border: 10px white solid;
  border-radius: 50px;
  width: 500px;
  height: 500px;
`;

const LoginInput = styled.input`
  position: relative;
  top: 20%;
  left: 10%;
  color: white;
  background-color: #189cf4;
  width: 400px;
  height: 20px;
  border: 2px white dotted;
  margin-bottom: 100px;
`;

const styledButton = styled.button`
  position: relative;
  width: 400px;
  height: 20px;
  border: 2px white solid;
`;
export { TitleDiv, TextDiv, LoginInput, styledButton };
