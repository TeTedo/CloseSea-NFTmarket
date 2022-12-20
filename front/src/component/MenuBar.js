import React from "react";
import { useNavigate } from "react-router-dom";
import {
  MenuContent,
  MenuText,
  MenuTitle,
  TextContent,
  UserContent,
  UserText,
} from "./MenuComponent";

function MenuBar(props) {
  const navigate = useNavigate();
  return (
    <div>
      <MenuContent>
        {/* 메인 페이지 이동 */}
        <MenuTitle onClick={() => {navigate("/")}}>
          Close Sea
        </MenuTitle>
        {/* 스왑 페이지 이동 */}
        <MenuText>
          <TextContent>Shop</TextContent>
          <TextContent onClick={() => {navigate("/swap")}}>
            Swap
          </TextContent>
        </MenuText>
        <UserContent>
        {/* 로그인 상태 확인 */}
          {props.isLogin ? (
            <UserText>MyPage</UserText>
          ) : (
            <UserText onClick={() => {navigate("/Login")}}>
              Login
            </UserText>
          )}
        </UserContent>
      </MenuContent>
    </div>
  );
}

export default MenuBar;
