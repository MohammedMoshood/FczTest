import React, { useState } from "react";
import {
  InfoCard,
  ImgWrap,
  InfoImg,
  InfoCardHeading,
  InfoText,

} from "./SmallCardElements";

const SmallCards = ({ Img, altText, Heading, subtitle , id }) => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <>
      <InfoCard id={id}  >
        <ImgWrap>
          <InfoImg src={Img} alt={altText}></InfoImg>
        </ImgWrap>

        <InfoCardHeading>{Heading}</InfoCardHeading>
        <InfoText>{subtitle}</InfoText>
        <h1
          style={{
            marginLeft: 36,
            fontSize: 20,
            cursor: "pointer",
          }}
        >
          <a
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              textDecoration: "none",
              color: isHovering ? "black" : "green",
            }}
            href=""
          >
            Learn More
          </a>
        </h1>
      </InfoCard>
    </>
  );
};

export default SmallCards;
