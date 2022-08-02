import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
// import { Link as LinkScroll } from "react-scroll";
import { MdKeyboardArrowDown } from "react-icons/md";

export const Nav = styled.nav`
  background: transparent;
  height: 160px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: absolute and sticky;
  top: 0;
  transform: translate(0, 10px);
  z-index: 10;
  /* border-radius: 50px; */

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
  @media screen and (max-width: 768px) {
    height: 80px;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 130px;
  width: 100%;
  padding: 0 24px;
  max-width: 1920px;
`;
export const LogoContainer = styled.div`
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 24px;
  @media screen {
    margin-top: 12px;
  }
`;

export const DmoLink= styled.a`
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 20%;
    font-size: 1.8rem;
    cursor: pointer;
    color: white;
    padding: 50px 20px;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  color: white;
  padding-left: 80px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 80px;
`;
export const NavLinks = styled(LinkRouter)`
  display: flex;

  align-items: center;
  font-family: "M PLUS Rounded 1c", sans-serif;
  text-decoration: none;
  padding: 0 2rem;
  font-weight: 700;
  font-size: 20px;
  height: 70%;
  cursor: pointer;
  border-radius: ${({ buttoned }) => (buttoned ? "50px" : "0")};
  color: ${({ buttoned }) => (buttoned ? "green" : "white")};

  background-color: ${({ buttoned }) => (buttoned ? "white" : "")};
  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const Arrowdown = styled(MdKeyboardArrowDown)`
  margin-left: 8px;
  font-size: 20px;
`;

export  const JapLink = styled.a`
   
` 

export const Logo = styled.img`
  height: 150px;
  max-width: 100%;
  @media screen and (max-width: 768px) {
    height: 100px;
    transition: 0.2s all ease-in-out;
  }
`;

export const LagosLogo = styled.img`
  height: 170px;
  max-width: 100%;
  @media screen and (max-width: 768px) {
    margin-top: 30px;
    height: 120px;
    transition: 0.2s all ease-in-out;
  }
`;