import React from "react";
import {
  MainVisual,
  CircleBox,
  MainSlideBox,
  MainCircleInner,
} from "./BackgroundConponent";

function MainBackground() {
  return (
    <div>
      <MainVisual />
      <MainSlideBox />
      <MainCircleInner>
        <img src="https://metatoydragonz.io/img/main/main_blink1.png" alt="" />
      </MainCircleInner>
    </div>
  );
}

export default MainBackground;
