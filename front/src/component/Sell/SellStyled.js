import styled from "styled-components";

const SellIMG = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
const SellCotent = styled.div`
  overflow-x: hidden;
`;

const SellWrap = styled.div`
  background-color: #189cf4;
  width: 100vw;
  height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SellTitleDiv = styled.div`
  /* background-color: white; */
  width: 1200px;
  height: 600px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 50px;
  box-sizing: border-box;
`;
const SellLeftDiv = styled.div`
  width: 100%;
  height: 100%;
  border: 3px solid black;
  background-color: skyblue;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;
const SellRightDiv = styled.div`
  margin-left: 50px;
  width: 80%;
  height: 100%;
`;
const SellInput = styled.input`
  margin: 30px 0px;
  border: 2px black solid;
  height: 40px;
  width: 100%;
  font-size: 30px;
  border-radius: 10px;
  padding: 10px;
`;

const SellRightTitle = styled.div`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 50px;
`;

const SellRightContent = styled.div`
  font-size: 30px;
  font-weight: 500;
`;

const SellText = styled.text``;

const SellBtn = styled.button`
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
const MyNFTContent = styled.div`
  padding-bottom: 50px;
`;
const MyNFTTitle = styled.div`
  padding: 30px 0;
  text-align: center;
  font-size: 50px;
  font-weight: 600;
`;
const ChoiceNFT = styled.img`
  border-radius: 10px;
  width: 240px;
`;

export {
  SellIMG,
  SellWrap,
  SellTitleDiv,
  SellLeftDiv,
  SellRightDiv,
  SellInput,
  SellText,
  SellRightTitle,
  SellRightContent,
  SellBtn,
  SellCotent,
  MyNFTContent,
  MyNFTTitle,
  ChoiceNFT,
};
