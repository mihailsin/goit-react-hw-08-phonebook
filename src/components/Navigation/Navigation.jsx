import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserName, getIsLoggedIn } from 'redux/auth-selectors';
import { useLogOutUserMutation } from 'redux/userApi';
import { unsetUser } from 'redux/authSlice';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { blue } from '@mui/material/colors';
import { Wrapper, Container, List } from './Navigation.styled';
import { NavLink } from 'react-router-dom';
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
  const dispatch = useDispatch();
  const [logOutUser] = useLogOutUserMutation();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const userName = useSelector(getUserName);

  const logOut = () => {
    logOutUser()
      .then(dispatch(unsetUser()))
      .catch(error => console.log(error));
  };
  console.log(userName, isLoggedIn);
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static">
        {isLoggedIn ? (
          <Wrapper>
            <Container>
              <nav>
                <List>
                  <li>
                    <NavLink
                      style={({ isActive }) =>
                        isActive ? activeLink : navLink
                      }
                      to="contacts"
                    >
                      Contacts
                    </NavLink>
                  </li>
                </List>
              </nav>
            </Container>
            <Container>
              <List>
                <li>
                  <Avatar
                    sx={{ bgcolor: blue[100], color: blue[600], mr: 2 }}
                  />
                </li>
                <li>Hello, {userName}!</li>
                <li>
                  <Button
                    sx={{
                      boxShadow: 1,
                      borderRadius: 2,
                      minWidth: 30,
                      ml: 2,
                    }}
                    variant="contained"
                    size="small"
                    color="secondary"
                    type="button"
                    onClick={() => logOut()}
                  >
                    Log out
                  </Button>
                </li>
              </List>
            </Container>
          </Wrapper>
        ) : (
          <Container>
            <nav>
              <List>
                <li>
                  <NavLink
                    style={({ isActive }) => (isActive ? activeLink : navLink)}
                    to="register"
                  >
                    Register
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={({ isActive }) => (isActive ? activeLink : navLink)}
                    to="login"
                  >
                    Login
                  </NavLink>
                </li>
              </List>
            </nav>
          </Container>
        )}
      </AppBar>
    </ThemeProvider>
  );
};

export default Navigation;
