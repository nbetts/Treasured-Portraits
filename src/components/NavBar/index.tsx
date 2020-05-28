import React from 'react';
import { Routes } from '../../routes';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavBarContainer = styled.ul`
  margin: 0;
  display: flex;
  justify-content: center;
  background-color: #383838;
`;

const NavBarItem = styled.li`
  display: block;
`;

const NavBarLink = styled(NavLink)`
  display: block;
  background-color: #383838;
  color: #fefefc;
  padding: 30px 40px;
  transition: 0.1s;
  cursor: pointer;

  &:hover {
    background-color: #ccb76e;
  }
`;

export const NavBar = () => {
  return (
    <nav>
      <NavBarContainer>
        <NavBarItem>
          <NavBarLink to={Routes.HOME}>Home</NavBarLink>
        </NavBarItem>
        <NavBarItem>
          <NavBarLink to={Routes.GALLERY}>Gallery</NavBarLink>
        </NavBarItem>
        <NavBarItem>
          <NavBarLink to={Routes.TESTIMONIALS}>Testimonials</NavBarLink>
        </NavBarItem>
        <NavBarItem>
          <NavBarLink to={Routes.ABOUT}>About</NavBarLink>
        </NavBarItem>
        <NavBarItem>
          <NavBarLink to={Routes.CONTACT}>Contact</NavBarLink>
        </NavBarItem>
      </NavBarContainer>
    </nav>
  );
};
