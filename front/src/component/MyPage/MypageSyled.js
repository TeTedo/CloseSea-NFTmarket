import styled from "styled-components";

const MyPageContent = styled.div`
  display: grid;
  grid-template-rows: 100px 1fr;
  align-items: center;
  border-top: 5px solid black;
  padding: 20px;
`;
const AccountText = styled.div`
  font-size: 50px;
  font-weight: 600;
`;
const CollectedTitle = styled.div`
  font-size: 50px;
  font-weight: 600;
  padding-bottom: 20px;
`;
const CollectedContent = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: calc(100% - 15%);
  min-height: 350px;
  padding: 50px;
  background-color: white;
  border: 5px solid black;
  display: grid;
  grid-template-columns: repeat(5, 240px);
  grid-gap: 60px;
  place-content: center;
  border-radius: 40px;
`;
export { MyPageContent, AccountText, CollectedContent, CollectedTitle };
