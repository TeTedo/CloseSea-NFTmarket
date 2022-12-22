import styled from "styled-components";

const ExchangePosition = styled.div`
  min-height: calc(100vh - 100px);
  display: grid;
  grid-template-rows: 200px 1fr;
  /* background-color: white; */
`;
const ExchangeTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 70px;
  font-weight: 600;
`;
const SellBtn = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  float: right;
  font-size: 50px;
  font-weight: 600;
  border: 0;
  &:hover {
    color: white;
  }
`;
const ExchangeContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 230px);
  grid-template-rows: repeat(2, 1fr);
  place-content: center;
  grid-gap: 100px;
`;
const TestBox = styled.div`
  display: grid;
  grid-template-rows: 5fr 1fr 1fr 1fr;
  width: 230px;
  height: 350px;
  border-radius: 10px;
  /* padding: 10px; */
  /* border: 1px solid; */
  background-color: white;
  align-items: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  overflow: hidden;
  &:hover button {
    transform: translateY(0);
  }
  &:hover img {
    transform: scale(1.1);
  }
`;
const NFTPictureSize = styled.div`
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  width: 230px;
  height: 230px;
  overflow: hidden;
`;
const NFTPicture = styled.img`
  position: relative;
  right: 5px;
  width: 240px;
  transition: all 0.4s;
`;
const NFTNumber = styled.div`
  margin-left: 10px;
  font-weight: 600;
`;
const NFTPrice = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-left: 10px;
`;
const NFTBuyBtn = styled.button`
  background-color: #e09528;
  font-size: 20px;
  height: 40px;
  border: 0;
  transition: all 0.4s;
  transform: translateY(40px);
  &:hover {
    background-color: #945700;
  }
`;

export {
  ExchangePosition,
  ExchangeTitle,
  ExchangeContent,
  TestBox,
  NFTPicture,
  NFTNumber,
  NFTPrice,
  NFTPictureSize,
  NFTBuyBtn,
  SellBtn,
};
