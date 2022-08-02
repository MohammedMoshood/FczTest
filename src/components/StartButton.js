import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  border-radius: 58px;
  background: white;
  color: #2d9141;
  font-size: 24px;
  padding: 24px 80px;
  outline: none;
  text-decoration: none;
  font-weight: 600;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #2d353d;
    color: white;
  }

  @media screen and (max-width: 768px) {
    padding: 12px 40px;
  }
`;
