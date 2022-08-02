import styled from "styled-components";

export const InfoContainer = styled.div`
  height: 1200px;
  background: #e4f0f0;
  z-index: 1;
  margin-top: -200px;
  width: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: grid;
    justify-content: center;
    height: 2100px;
    margin-top: -200px;
    position: relative;
    z-index:1 ;
  }
`;
export const InfoWrapper = styled.div`
  max-width: 2000px;
  height: 20%;
  display: grid;
  align-items: center;
  line-height: 1.5;
  justify-content: center;
  text-align: center;
  margin-bottom: -380px;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    align-items: center;
    display: grid;
    height: 200px;
    justify-content: center;
    text-align: center;
   
  }
`;

export const InfoH2 = styled.h2`
  color: #000;
  font-size: 60px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size:48px;
  }
`;

export const InfoP = styled.p`
  color: black;
  font-size: 20px;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    max-width: 600px;
  }
`;
export const InfoRow = styled.div`
  display: flex;
  background: transparent;
  color: black;
  width: 2000px;
  height: 500px;
  align-items: center;
  justify-content: center;
  margin-bottom: -100px;

  @media screen and (max-width: 768px) {
    display: grid;
    background: transparent;
    color: black;
    width: 100%;
    height: 1200px;
    align-items: center;
    justify-content: center;
    margin-bottom: 200px;
  }
`;
