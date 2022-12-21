import styled from "styled-components";

const TitleDiv = styled.div`
  background-color: #189cf4;
  position: absolute;
  width: 100%;
  /* 높이 수정 -한결 */
  height: calc(100vh - 100px);
`;

const TextDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  /* 선 두께 , 색상 , 그림자 추가 */
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  border: 5px solid black;
  border-radius: 25px;
  width: 500px;
  height: 500px;
  background-color: #79C2F2;
`;

const LoginInput = styled.input`
  position: relative;
  top: 14%;
  left: 10%; // 정렬 임시
  color: black;
  width: 370px;
  height: 30px;
  border: 3px black solid;
  padding: 10px;
  font-size: 20px;
  background-color: white;
  border-radius: 8px;
  margin-bottom: 50px;
`;

const StyledButton = styled.button`
   /* 버튼 높이 수정 , 버튼 선 색상 두께 수정 */
  position: relative;
  top: 5%;
  left: 10%; // 정렬 임시
  width: 400px;
  height: 50px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 600;
  margin-top: 70px;

  /* border: 2px silver solid; */
  border: 3px solid black;
  &:active {
    background-color: lightslategrey;
  }
`;
const TitleText = styled.div`
  margin-top: 50px;
  color: black;
  font-size: 70px;
  font-weight: 600;
  text-align: center;
`

export { TitleDiv, TextDiv, LoginInput, StyledButton ,TitleText};
