import React, { useState } from 'react'
import MainBackground from 'component/Main/Background'
import { BackGround ,MainContent,MainText,SubText,NFTImg,Puppy,NFTContents,ImgText,MintingBtn} from 'component/Main/BackgroundConponent'


function Main() {
  // 강아지 달리게 하기
  const [run,setRun] = useState(true);
  setTimeout(() => {
    setRun(!run)
  }, 5000);
  
  return (
    <div className=''>
      <BackGround>
        <MainBackground/> 
        <MainContent>
          <MainText>
            <div>WELCOM,</div>
            <div>BABY</div> 
            <SubText>
              {
                run ?
                <Puppy src="http://pixelart.pe.kr/data/editor/2010/20201016164213_b6e7bde336df07f9a972e6a4f1933c45_yh6g.gif"/>
                :
                <Puppy src="http://pixelart.pe.kr/data/editor/2010/20201016164213_b6e7bde336df07f9a972e6a4f1933c45_6t89.gif"/>
              }
              <p>This is the NFT Exchange.</p>
              <p>Please use it a lot.</p>
            </SubText>
          </MainText>
          <div>
              <NFTContents>
                <NFTImg src="https://play-lh.googleusercontent.com/3_L-KeSNkQhcGCI6C5tGybeqSungirp8aLg0pXKT6eOU7sKubC22HAn5iuxhD-wDpzo"/>
                <NFTImg src="http://blog.lgdisplay.com/lgdisplay/wp-content/uploads/2016/11/20161116_065544.jpg"/>
                <NFTImg src="https://www.coindeskkorea.com/news/photo/202110/75792_15444_5145.jpg"/>
                <NFTImg src="https://cdn-static.todayis.io/u_nfts/202202/11/202202111450804092_IMND2v.jpeg"/>
                <NFTImg src="http://www.coindeskkorea.com/news/photo/202108/74962_14086_1316.jpg"/>
              </NFTContents>
              <ImgText>
                  <p>Try owning various NFTs through minting.</p>
                  <p>Press the button below.</p>
                  <MintingBtn>Going to do Minting</MintingBtn>
              </ImgText>
          </div>
          
        </MainContent>
      </BackGround>

    </div>
  )
}

export default Main