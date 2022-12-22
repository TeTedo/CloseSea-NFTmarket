import styled from "styled-components";

const MyPageContent = styled.div`
    display: grid;
    grid-template-rows: 100px 1fr;
    align-items: center;
    border-top: 5px solid black;

`
const AccountText = styled.div`
    padding-left: 20px;
    font-size: 50px;
    font-weight: 600;
`
export {MyPageContent,AccountText}