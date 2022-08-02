import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {Link as LinkRouter} from "react-router-dom"

export const SidebarContainer = styled.aside`
  position: fixed;
  width: 80%;
  height: 80%;
  background-color: #4d9c30;
  border-bottom-left-radius: 50px;
  border-bottom: 5px solid green;
  border-left: 5px solid greenyellow;
  display: grid;
  align-items: center;
  top: 0;
  right: 0;
  z-index: 999;
  transition: 0.4s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;
export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 3rem;
  cursor: pointer;
  outline: none;
`;


export const CloseIcon = styled(FaTimes)`
  color: white;
  &:hover{
    color:darkred;
  }
`;

export const SideBarWrapper = styled.div`
  color: white;
`;
export const SideBarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(9, 90px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(7, 70px);
  }
`;
export const SideBarLink = styled(LinkRouter)`
  display: flex;
  align-items: center;

  justify-content: flex-start;
  font-size: 1.5rem;
  text-decoration: none;
  text-align: left;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: white;
  margin: 0 60px;
  border-bottom: white 1px solid;
  background-color: ${({ buttoned }) => (buttoned ? "white" : "")};
  color: ${({ buttoned }) => (buttoned ? "green" : "white")};
  border-radius: ${({ buttoned }) => (buttoned ? "50px" : "")};

  &:hover {
    color: ${({ buttoned }) => (buttoned ? "white" : "darkgreen")};
    background-color: ${({ buttoned }) => (buttoned ? "#2d353d" : "")};

    transition: 0.2s ease-in-out;
  }
`;

