import styled from "styled-components";

const SellContent = styled.div`
    min-height: calc(100vh - 100px);
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap: 30px;
`
const LeftImg = styled.img`
    margin-top: 20px;
    width: 700px;
    height: 700px;
    border-radius: 10px;
`
const LeftContent = styled.div`
    justify-self: end;
`
export {SellContent,LeftImg,LeftContent}