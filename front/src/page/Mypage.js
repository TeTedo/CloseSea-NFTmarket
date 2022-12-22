import React from "react";
import {
  MyPageContent,
  AccountText,
  CollectedContent,
  CollectedTitle,
} from "../component/MyPage/MypageSyled";
import NFTComponent from "component/MyPage/NFTComponent";
import NFTImg from "../image/index";

function Mypage() {
  return (
    <MyPageContent>
      <AccountText>Account : 0x411ab2b3b54n1b</AccountText>
      <CollectedTitle>Collected</CollectedTitle>
      <CollectedContent>
        <NFTComponent img={NFTImg[1]} />
      </CollectedContent>
    </MyPageContent>
  );
}
export default Mypage;
