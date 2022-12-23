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
      <AccountText>
        Account : 0xf4EB0bF726fd2c0Bf892e7dBcb320f4A0F53F1a5
      </AccountText>
      <CollectedTitle>Collected</CollectedTitle>
      <CollectedContent>
        <NFTComponent img={NFTImg[1]} />
        <NFTComponent img={NFTImg[1]} />
        <NFTComponent img={NFTImg[1]} />
        <NFTComponent img={NFTImg[1]} />
        <NFTComponent img={NFTImg[1]} />
        <NFTComponent img={NFTImg[1]} />
        <NFTComponent img={NFTImg[1]} />
        <NFTComponent img={NFTImg[1]} />
        <NFTComponent img={NFTImg[1]} />
        <NFTComponent img={NFTImg[1]} />
        <NFTComponent img={NFTImg[1]} />
        <NFTComponent img={NFTImg[1]} />
        <NFTComponent img={NFTImg[1]} />
        <NFTComponent img={NFTImg[1]} />
        <NFTComponent img={NFTImg[1]} />
        <NFTComponent img={NFTImg[1]} />
        <NFTComponent img={NFTImg[1]} />
        <NFTComponent img={NFTImg[1]} />
        <NFTComponent img={NFTImg[1]} />
      </CollectedContent>
    </MyPageContent>
  );
}
export default Mypage;
