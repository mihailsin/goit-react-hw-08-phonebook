import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Routes, Route, NavLink } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#161313',
    },
  },
});

const navLink = {
  marginLeft: 20,
  color: '#ffffff',
  textDecoration: 'none',
};
const activeLink = {
  marginLeft: 20,
  color: '#ffffff',
  textDecoration: 'underline',
  fontStyle: 'oblique 10deg',
};
const Navigation = () => {
  return (
    <ThemeProvider theme={darkTheme}>
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
    </ThemeProvider>
  );
};

export default Navigation;
