import React, { useEffect, useState } from "react";
import MainBackground from "component/Main/Background";
import {
  BackGround,
  MainContent,
  MainText,
  SubText,
  NFTImg,
  NFTContents,
  ImgText,
  MintingBtn,
  RightConent,
} from "component/Main/BackgroundStyled.";

function Main() {
  const [opacity, setOpacity] = useState("");
  const [transform, setTransform] = useState("");
  const [opacity2, setOpacity2] = useState("");
  const [transform2, setTransform2] = useState("");

  useEffect(() => {
    setOpacity("1");
    setTransform("0");
    setTimeout(() => {
      setOpacity2("1");
      setTransform2("0");
    }, 500);
  }, []);

  return (
    <div className="">
      <BackGround>
        <MainBackground />
        <MainContent>
          <MainText opacity={opacity} transform={transform}>
            <div>WELCOM,</div>
            <div>BABY</div>
            <SubText opacity={opacity2} transform={transform2}>
              <p>This is the NFT Exchange.</p>
              <p>Please use it a lot.</p>
            </SubText>
          </MainText>
          <RightConent>
            <NFTContents opacity={opacity} transform={transform}>
              <NFTImg src="https://play-lh.googleusercontent.com/3_L-KeSNkQhcGCI6C5tGybeqSungirp8aLg0pXKT6eOU7sKubC22HAn5iuxhD-wDpzo" />
              <NFTImg src="http://blog.lgdisplay.com/lgdisplay/wp-content/uploads/2016/11/20161116_065544.jpg" />
              <NFTImg src="https://www.coindeskkorea.com/news/photo/202110/75792_15444_5145.jpg" />
              <NFTImg src="https://cdn-static.todayis.io/u_nfts/202202/11/202202111450804092_IMND2v.jpeg" />
              <NFTImg src="http://www.coindeskkorea.com/news/photo/202108/74962_14086_1316.jpg" />
            </NFTContents>
            <ImgText opacity={opacity2} transform={transform2}>
              <p>Try owning various NFTs through minting.</p>
              <p>Press the button below.</p>
              <MintingBtn>Going to do Minting</MintingBtn>
            </ImgText>
          </RightConent>
        </MainContent>
      </BackGround>
    </div>
  );
}

export default Main;
