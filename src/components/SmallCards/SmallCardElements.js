import styled from "styled-components";

export const InfoCard = styled.div`
  background: white;
  height: 100%;
  display: grid;
  width: 22%;
  margin: 0 24px;
  border-radius: 20px;
  justify-content: left;
  @media screen and (max-width: 768px) {
    background: white;
    height: 450px;
    display: grid;
    width: 480px;
    margin: 24px auto;
    border-radius: 20px;
    justify-content: left;
  }
  &:hover {
    background: lightgrey;
    transition: all 0.4s ease-in-out;
  }
`;

export const ImgWrap = styled.div`
  width: 120px;
  background: transparent;
  height: 120px;
  border-radius: 100px;
  margin: 20px;
  align-items: center;
  justify-content: center;
  /* border: 0.5px green solid ; */
`;

export const InfoImg = styled.img`
  max-width: 100px;
  height: 80px;
  margin: 20px 22px;
`;
export const InfoCardHeading = styled.h3`
  font-size: 36px;
  text-decoration: none;
  margin-top: -80px;
  margin-left: 36px;
  max-width: 70%;
`;
export const InfoText = styled.p`
  font-size: 20px;
  text-decoration: none;
  margin-top: -50px;
  margin-left: 36px;
  max-width: 80%;
  line-height: 1.2;
 
`;
