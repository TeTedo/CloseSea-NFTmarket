import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  MenuContent,
  MenuText,
  MenuTitle,
  TextContent,
  UserContent,
  UserText,
} from "./MenuComponent";
import ConnectWalletBtn from "./ConnectWalletBtn";
import { Context } from "App";
function MenuBar({ setAccount }) {
  const { account } = useContext(Context);
  const navigate = useNavigate();
  return (
    <div>
      <MenuContent>
        {/* 메인 페이지 이동 */}
        <MenuTitle
          onClick={() => {
            navigate("/");
          }}
        >
          Close Sea
        </MenuTitle>
        {/* 스왑 페이지 이동 */}
        <MenuText>
          <TextContent
            onClick={() => {
              navigate("/exchange");
            }}
          >
            Shop
          </TextContent>
          <TextContent
            onClick={() => {
              navigate("/swap");
            }}
          >
            Swap
          </TextContent>
        </MenuText>
        <UserContent>
          {/* 로그인 상태 확인 */}
          {account ? (
            <UserText
              onClick={() => {
                navigate("/mypage");
              }}
            >
              MyPage
            </UserText>
          ) : (
            <>
              <UserText>
                <ConnectWalletBtn setAccount={setAccount} />
              </UserText>
            </>
          )}
        </UserContent>
      </MenuContent>
    </div>
  );
}

export default MenuBar;
