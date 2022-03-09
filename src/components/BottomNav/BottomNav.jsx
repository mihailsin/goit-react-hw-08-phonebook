import React from 'react';
import { VscGithub } from 'react-icons/vsc';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { List, Item, Link, Wrapper, Footer } from './BottomNav.styled';

const BottomNav = () => {
  return (
    <Footer>
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

        <Item>
          Made by GoIT student Misha Sinkov, group FSOn#39, March 2022
        </Item>
      </List>
    </Footer>
  );
};
export default BottomNav;
