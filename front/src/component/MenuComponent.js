import React from "react";
import styled from "styled-components";

const MenuContent = styled.div`

  height: 100px;
  display: grid;
  grid-template-columns: 0.4fr 1fr 0.5fr;
  align-items: center;
`;
const MenuTitle = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 60px;
`;

const MenuText = styled.div`
  display: flex;
  justify-content: space-around;
`;

const TextContent = styled.div`
  font-size: 40px;
  font-weight: 600;
  padding: 20px;
  transition: all ease 0.4s;
  border-bottom: 5px solid transparent;
  &:hover {
    color: white;
    border-bottom: 5px solid black;
  }
`;

const UserContent = styled.div`
  display: flex;
  justify-content: space-around;
`;

const UserText = styled.div`
  font-size: 35px;
  font-weight: 600;
  transition: all ease 0.4s;
  &:hover{
    color: white;
  }
`;

export { MenuContent, MenuText, MenuTitle, TextContent, UserContent, UserText };
