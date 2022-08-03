import React from 'react'
import { CloseIcon, SidebarContainer , Icon, SideBarWrapper, SideBarMenu, SideBarLink} from './SidebarElements'

const Sidebar = ({isOpen , toggle}) => {

  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon>
          <CloseIcon />
        </Icon>
        <SideBarWrapper>
          <SideBarMenu>
            <SideBarLink to="Home">Home</SideBarLink>
            <SideBarLink to="About us">About us</SideBarLink>
            <SideBarLink to="Laws">Laws</SideBarLink>
            <SideBarLink to="Bond">Bond</SideBarLink>
            <SideBarLink to="reports">Reports</SideBarLink>
            <SideBarLink to="projects">Projects</SideBarLink>
            <SideBarLink to="media">Media</SideBarLink>
            <SideBarLink buttoned="true" style={{ width:"200px" , height:"50px"  , margin:"24px auto" , padding:"0 40px"}} to="contact">Contact us</SideBarLink>
          </SideBarMenu>
        </SideBarWrapper>
      </SidebarContainer>
    </>
  );
}

export default Sidebar