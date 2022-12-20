import React from 'react'
import {MainVisual,CircleBox,MainSlideBox,MainCircleInner,MainContent,MainText} from "./BackgroundConponent"

function MainBackground() {
  return (
    <div>
        <MainVisual/>
        <CircleBox/>
        <MainSlideBox/>
        <MainCircleInner>
          <img src="https://metatoydragonz.io/img/main/main_blink1.png" alt="" />
        </MainCircleInner>
        <MainContent>
          <MainText>
            
            <div>WELCOM,</div>
            <div>BABY</div>
          </MainText>
        </MainContent>
    </div>
  )
}

export default MainBackground