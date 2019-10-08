import React from "react";
import { NavLink } from 'react-router-dom'

import Container from '@material-ui/core/Container';
import styled from 'styled-components';
import './header-style.css';


const  HeaderPanel = styled.header`
    background-color: #20232a;
    color: #fff; 
    width: 100%;
`;

const  NavList = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
    padding: 25px 0;
`;

const  NavItem =styled.li`
    padding: 0 15px; 
`;

const  StyledLink = styled(NavLink)`
    color: #fff;
    display: inline-block;
    font-size: 22px;
    line-height: 42px;
    text-decoration: none;
    font-weight: 500;
    &.active {
    color: red;
  }
`;

const Header = () => {
  return (
      <HeaderPanel className="app-header">
          <Container maxWidth="lg">
            <nav>
              <NavList>
                <NavItem>
                  <StyledLink exact  to="/">Home</StyledLink>
                </NavItem>
                <NavItem>
                  <StyledLink exact  to="/characters">Characters</StyledLink>
                </NavItem>
                <NavItem>
                  <StyledLink exact  to="/comics">Comics</StyledLink>
                </NavItem>
              </NavList>
            </nav>
          </Container>
      </HeaderPanel>
    );
}


export default Header;
