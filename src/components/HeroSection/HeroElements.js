import styled from "styled-components";

import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 500px;
  width: 100%;
  margin-top: 265px;
  position: absolute;
  z-index: 1;
  
`;

export const HeroContent = styled.div`
  max-width: 1200px;
  position: absolute;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;
`;

export const HeroH1 = styled.h1`
  color: white;
  font-size: 75px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const HeroP = styled.p`
  margin-top: 48px;
  color: white;
  font-size: 24px;
  text-align: center;
  max-width: 800px;
  padding: 0 5px;
  line-height: 1.3;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 36px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 36px;
`;


