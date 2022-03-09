import React from 'react';
import AppBar from '@mui/material/AppBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { VscGithub } from 'react-icons/vsc';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { List, Item, Link, Wrapper } from './BottomNav.styled';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#161313',
    },
  },
});

const BottomNav = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar sx={{ position: 'sticky', bottom: '0' }}>
        <List>
          <Wrapper>
            <Item>
              <Link href="https://github.com/mihailsin?">
                <VscGithub size={30} />
                &nbsp; My Github
              </Link>
            </Item>
            <Item>
              <Link href="https://www.linkedin.com/in/mykhailo-sinkov/">
                <AiOutlineLinkedin size={30} /> &nbsp; My LinkedIn
              </Link>
            </Item>
          </Wrapper>

          <Item>Made by GoIT student Misha Sinkov, March 2022</Item>
        </List>
      </AppBar>
    </ThemeProvider>
  );
};
export default BottomNav;
