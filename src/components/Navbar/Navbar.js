import React, { useState } from "react";
import {FaBars} from "react-icons/fa"
import {
  Nav,
  NavbarContainer,
  DmoLink,
  JapLink,
  NavItem,
  NavLinks,
  NavMenu,
  Logo,
  Arrowdown,
  LogoContainer,
  LagosLogo,
  MobileIcon,
} from "./NavbarElements";
import JAP from "../../image/JAP.png";
import DMO from "../../image/dmo.png";

const Navbar = ({toggle}) => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <>
      <Nav>
        <NavbarContainer>
          <LogoContainer>
            <DmoLink href="">
              <Logo
                style={{ marginTop: 35 }}
                src={DMO}
                alt="Debt Management office"
              ></Logo>
            </DmoLink>
          </LogoContainer>
          <MobileIcon>
            <FaBars onClick={toggle}/>
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavLinks to="home">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="About">
                About us <Arrowdown />
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="laws">Laws</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="bond">Bond</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="reports">Reports</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects">Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="media">Media</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                  color:isHovering?"white":"green",
                  backgroundColor: isHovering ? "#2d353d" : "white",
                  transition: "0.3s all ease-in-out",
                }}
                buttoned
                to="contact"
              >
                Contact us
              </NavLinks>
            </NavItem>
          </NavMenu>
          <JapLink href="">
            <LagosLogo src={JAP} alt="Lagos state Logo"></LagosLogo>
          </JapLink>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
