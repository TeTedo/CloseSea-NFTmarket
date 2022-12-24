import React from "react";
import {
  Wrap,
  Container,
  // GraphWrap
} from "component/Swap/SwapStyled";
import SwapToken from "component/Swap/SwapToken";
const Swap = () => {
  return (
    <Wrap>
      <Container>
        {/* <GraphWrap></GraphWrap> */}
        <SwapToken></SwapToken>
      </Container>
    </Wrap>
  );
};

export default Swap;
