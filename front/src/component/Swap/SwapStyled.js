import styled from "styled-components";

const Wrap = styled.div`
  background-color: #189cf4;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
// navbar추가되면 이거 위치 옮기면 됨
const Container = styled.div`
  width: 1200px;
  height: 500px;
  display: flex;
`;

const GraphWrap = styled.div`
  width: 800px;
  height: 100%;
  border: 3px dotted #58faf4;
  border-radius: 12px;
`;
const SwapWrap = styled.div`
  margin-left: 50px;
  width: 350px;
  height: 100%;
  border: 1px solid black;
  background-color: white;
  border: 1px solid #58faf4;
  border-radius: 12px;
  box-sizing: border-box;
`;
const SwapTop = styled.div`
  width: 100%;
  height: 50px;
  padding: 10px;
  font-size: 30px;
  box-sizing: border-box;
  font-weight: bold;
`;
const SwapMid = styled.div`
  width: 100%;
  height: 330px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const SwapCon = styled.div`
  margin: 10px 0;
  width: 80%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SymWrap = styled.div`
  width: 50%;
  box-sizing: border-box;
  height: 70px;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Logo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid black;
`;
const InputNum = styled.input`
  width: 50%;
  height: 40px;
  box-sizing: border-box;
  box-shadow: inset 0 0 1px 1px black;
  outline: none;
  font-size: 15px;
  text-align: right;
  padding-right: 10px;

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
const SwapIcon = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 50%;
  background-color: #58faf4;
  cursor: pointer;
  :hover {
    background-color: #189cf4;
  }
`;
const SwapBot = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
`;

const Fee = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const SwapBtn = styled.div`
  margin-top: 10px;
  width: 80%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  font-size: 20px;
  background-color: #58faf4;
  cursor: pointer;
  :hover {
    background-color: #189cf4;
  }
`;
export {
  Wrap,
  Container,
  GraphWrap,
  Logo,
  SwapWrap,
  SwapTop,
  SwapMid,
  SwapBot,
  Fee,
  SwapBtn,
  SwapCon,
  SwapIcon,
  SymWrap,
  InputNum,
};
