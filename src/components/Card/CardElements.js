import styled from "styled-components";

export const CardContainer = styled.div`
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -400px;
  height: 600px;
  width: 100%;
  position: relative;
  z-index: 1;
`;
export const CardBg = styled.div`
width: 65%;
height: 550px;
background: lightgrey;
border-radius: 50px;
box-shadow: 5px 5px 50px black;
cursor: pointer;
align-content: center;
justify-content: center;

&:hover{
    background: grey;
    transition:0.4s ease-in-out ;
}

`
export const CardDim = styled.div`
  width: 98%; 
  height: 530px;
  margin:  10px 12px;
  padding: 10px;
  position: relative;
  border-radius: 50px;
  background: white;
`;
export const CardComp = styled.img`

`