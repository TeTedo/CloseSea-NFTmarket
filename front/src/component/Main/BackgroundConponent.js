import React from 'react';
import styled from 'styled-components';

// 배경색
const BackGround = styled.div`
    background-color: #189cf4;
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
    content: '';
    transition: 1s;
    transform: scale(1);
    z-index: 999;
`
const CircleBox = styled.div`
    position: absolute;    
    right: -60px;
    top: 144px;
    width: 248px;
    height: 248px;
    border-radius: 100%;
    background: #ffd92e;
    content: '';
    z-index: 5;
    transition: 1.2s;
    transform: scale(1);
`
const MainSlideBox = styled.div`
    &::after {
        content: '';
        position: absolute;
        left: 12%;
        top: 22%;
        width: 62px;
        height: 87px;
        animation: float_img 2.1s ease-in-out infinite;
        background: url(https://metatoydragonz.io/img/main/bling01.png) no-repeat center;
    }
    &::before{
        content: '';
        position: absolute;
        right: 20%;
        top: 35%;
        transform: translateY(-50%);
        width: 62px;
        height: 59px;
        animation: float_img 2.4s ease-in-out infinite;
        background: url(https://metatoydragonz.io/img/main/bling02.png) no-repeat center;
    }

`
const MainCircleInner = styled.div`
    position: absolute;
    right: 20%;
    top: 15%
`


export {BackGround,MainVisual,CircleBox,MainSlideBox,MainCircleInner} ;
