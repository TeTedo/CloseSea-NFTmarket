import styled from "styled-components";

// 배경색
const BackGround = styled.div`
  width: 100vw;
  height: calc(100vh - 100px);
  background-color: #189cf4;
  overflow: hidden;
`;
// 왼쪽 작은 원
const MainVisual = styled.div`
  position: absolute;
  left: -60px;
  top: 50%;
  width: 152px;
  height: 152px;
  border-radius: 100%;
  background: #fff;
  opacity: 0.15;
  content: "";
  transition: 1s;
  transform: scale(1);
  z-index: 999;
`;
// 왼쪽 별 : after , 오른쪽 별 :before
const MainSlideBox = styled.div`
  &::after {
    content: "";
    position: absolute;
    left: 36%;
    top: 15%;
    width: 62px;
    height: 87px;
    animation: float_img 2.1s ease-in-out infinite;
    background: url(https://metatoydragonz.io/img/main/bling01.png) no-repeat
      center;
  }
  &::before {
    content: "";
    position: absolute;
    right: 5%;
    top: 60%;
    transform: translateY(-50%);
    width: 62px;
    height: 59px;
    animation: float_img 2.4s ease-in-out infinite;
    background: url(https://metatoydragonz.io/img/main/bling02.png) no-repeat
      center;
  }
`;
const MainCircleInner = styled.div`
  position: absolute;
  right: 20%;
  top: 15%;
`;
const MainContent = styled.div`
  width: 100vw;
  height: calc(100vh - 100px);
  border: 1px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;
const MainText = styled.div`
  transition: all 0.4s;
  opacity: 1;
  text-align: center;
  font-size: 180px;
  font-weight: 600;
  div:first-child,
  div:nth-child(2),
  img {
    transition: all 1s;
    opacity: ${(props) => props.opacity || "0"};
    transform: ${(props) => props.transform || "translateY(20px)"};
  }
`;
const SubText = styled.div`
  transition: all 0.4s;
  /* opacity: 0;
  transform: translateY(20px); */
  margin-top: 100px;
  font-size: 50px;
  font-weight: 600;
  transition: all 1s;
  opacity: ${(props) => props.opacity || "0"};
  transform: ${(props) => props.transform || "translateY(40px)"};
`;
const NFTContents = styled.div`
  transition: all 1s;
  opacity: ${(props) => props.opacity || "0"};
  transform: ${(props) => props.transform || "translateY(20px)"};
  position: relative;
  top: 20px;
  /* bottom : 50px; */
  right: 3%;
  z-index: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;
const NFTImg = styled.img`
  width: 185px;
  height: 185px;
  &:first-child {
    transform: rotate(15deg);
    position: relative;
    top: 50px;
  }
  &:nth-child(2) {
    transform: rotate(345deg);
  }
  &:nth-child(3) {
    transform: rotate(15deg);
  }
  &:nth-child(4) {
    transform: rotate(345deg);
  }
  &:nth-child(5) {
    transform: rotate(15deg);
    position: relative;
    top: 50px;
  }
`;
const ImgText = styled.div`
  opacity: ${(props) => props.opacity || "0"};
  transform: ${(props) => props.transform || "translateY(20px)"};
  transition: all 1s;
  position: relative;
  text-align: center;
  font-size: 50px;
  font-weight: 600;
  p:first-child {
    font-size: 80px;
  }
`;
const MintingBtn = styled.button`
  background-color: transparent;
  border: 5px solid black;
  color: black;
  border-radius: 50px;
  padding: 20px 50px;
  font-size: 20px;
  font-weight: 600;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;
const RightConent = styled.div`
  position: relative;
  bottom: 50px;
`;
export {
  BackGround,
  MainVisual,
  MainSlideBox,
  MainCircleInner,
  MainContent,
  MainText,
  SubText,
  NFTImg,
  NFTContents,
  ImgText,
  MintingBtn,
  RightConent,
};
