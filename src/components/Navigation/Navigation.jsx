import React from 'react';
import { useSelector } from 'react-redux';
import { getUserName, getIsLoggedIn } from 'redux/auth-selectors';
import AppBar from '@mui/material/AppBar';
import { Wrapper, Container, List } from './Navigation.styled';
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
  const isLoggedIn = useSelector(getIsLoggedIn);
  const userName = useSelector(getUserName);
  console.log(userName, isLoggedIn);
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static">
        {isLoggedIn ? (
          <Wrapper>
            <Container>
              <nav>
                <List>
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
                </List>
              </nav>
            </Container>
            <Container>
              <List>
                <li>Hello, {userName}!</li>
                <button type="button">Log out</button>
              </List>
            </Container>
          </Wrapper>
        ) : (
          <Container>
            <nav>
              <List>
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
              </List>
            </nav>
          </Container>
        )}
      </AppBar>
    </ThemeProvider>
  );
};

export default Navigation;
