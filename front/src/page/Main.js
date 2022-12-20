import React, { useState } from 'react'
import MainBackground from 'component/Main/Background'
import { BackGround } from 'component/Main/BackgroundConponent'


function Main() {
 
  return (
    <div className=''>
      <BackGround>
        <MainBackground/> 
      </BackGround>

    </div>
  )
}

export default Main