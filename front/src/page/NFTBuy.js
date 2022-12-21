import React from 'react'
import { useParams } from 'react-router-dom'
import NftImg from "../image/index"
import { SellContent,LeftImg,LeftContent } from 'component/NFTBuy/NFTBuyStyled';

function NFTBuy() {
    const params = useParams();
    const id = params.id;
    console.log(id);
  return (
    <SellContent>
      <LeftContent>
        <LeftImg src={NftImg[id]} alt="" />
      </LeftContent>
      <div>
        안뇽?
      </div>
    </SellContent>
  )
}

export default NFTBuy