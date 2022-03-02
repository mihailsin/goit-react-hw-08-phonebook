import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Routes, Route, NavLink } from 'react-router-dom';

const navLink = {
  marginLeft: 20,
  color: '#ffffff',
  textDecoration: 'none',
};
const activeLink = {
  marginLeft: 20,
  color: '#000000',
  textDecoration: 'underline',
};
const Navigation = () => {
  return (
    <AppBar position="static">
      <nav>
        <ul>
          <NavLink
            style={({ isActive }) => (isActive ? activeLink : navLink)}
            to="register"
          >
            Register
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeLink : navLink)}
            to="login"
          >
            Login
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeLink : navLink)}
            to="contacts"
          >
            Contacts
          </NavLink>
        </ul>
      </nav>
    </AppBar>
  );
};

export default Navigation;
