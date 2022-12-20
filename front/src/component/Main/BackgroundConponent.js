import React from "react";
import styled from "styled-components";

// 배경색
const BackGround = styled.div`
  width: 100vw;
  height: 100vh;
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
// 오른쪽 노란원
const CircleBox = styled.div`
  position: absolute;
  right: -60px;
  top: 144px;
  width: 248px;
  height: 248px;
  border-radius: 100%;
  background: #ffd92e;
  content: "";
  z-index: 5;
  transition: 1.2s;
  transform: scale(1);
`;
// 왼쪽 별 : after , 오른쪽 별 :
const MainSlideBox = styled.div`
  &::after {
    content: "";
    position: absolute;
    left: 12%;
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
    right: 20%;
    top: 35%;
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
  height: calc(100vh - 300px);
  border: 1px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;
const MainText = styled.div`
  text-align: center;
  font-size: 256px;
  font-weight: 600;
`;
const SubText = styled.div`
  margin-top: 100px;
  font-size: 50px;
  font-weight: 600;
`;
const NFTContents = styled.div`
    position: absolute;
    top: 15%;
    left: 55%;
    z-index: 1000;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`
const NFTImg = styled.img`
    width: 185px;
    height: 185px;
    &:first-child{
        transform: rotate( 15deg );
    }
    &:nth-child(2){
        transform: rotate( 345deg );
    }
    &:nth-child(3){
        transform: rotate( 15deg );
    }
    &:nth-child(4){
        transform: rotate( 345deg );
    }
    &:nth-child(5){
        transform: rotate( 15deg );
    }
`
const Puppy = styled.img`
position: absolute;
top: 40%;
left: 1%;
`
const ImgText = styled.div`
    position: relative;
    text-align: center;
    font-size: 50px;
    font-weight: 600;
    p:first-child{
        font-size: 100px;
    }
`
const MintingBtn = styled.button`
    background-color:  transparent;
    border: 5px solid black;
    color: black;
    border-radius: 50px;
    padding: 20px 50px;
    font-size: 30px;
    font-weight: 600;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    &:hover{
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
`
export {
  BackGround,
  MainVisual,
  CircleBox,
  MainSlideBox,
  MainCircleInner,
  MainContent,
  MainText,
  SubText,
  NFTImg,
  Puppy,
  NFTContents,
  ImgText,
  MintingBtn
};
