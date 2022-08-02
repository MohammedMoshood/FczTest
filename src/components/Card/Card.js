import React from "react";
import { CardContainer , CardBg , CardDim , CardComp } from "./CardElements";

const Card = () => {
  return (
    <>
      <CardContainer>
        <CardBg>
            <CardDim>
                <CardComp></CardComp>
            </CardDim>
        </CardBg>
      </CardContainer>
    </>
  );
};

export default Card;
