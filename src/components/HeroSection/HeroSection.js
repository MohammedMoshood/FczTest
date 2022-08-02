import React, { useState } from "react";
import { HeroContainer, HeroContent, HeroH1, HeroP , ArrowForward , ArrowRight , HeroBtnWrapper } from "./HeroElements";
import { Button } from "../StartButton";

const HeroSection = () => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <>
      <HeroContainer>
        <HeroContent>
          <HeroH1>
            Lagos State <br />
            Debt Management office
          </HeroH1>
          <HeroP>
            we are charged with the responsibility of borrowing and issuing debt
            instruments on behalf of the state government and managing the state
            government's debt portfolio
          </HeroP>
          <HeroBtnWrapper>
            <Button
              to="learnmore"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Learn More {isHovering ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
