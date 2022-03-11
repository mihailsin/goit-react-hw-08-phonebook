import React from 'react';
import { VscGithub } from 'react-icons/vsc';
import { AiOutlineLinkedin } from 'react-icons/ai';
import {
  List,
  Item,
  Link,
  Wrapper,
  Footer,
  InlineLink,
} from './BottomNav.styled';

const BottomNav = () => {
  return (
    <Footer>
      <List>
        <Wrapper>
          <Item>
            <Link
              href="https://github.com/mihailsin?"
              target="_blank"
              rel="noopener, noreferrer"
            >
              <VscGithub size={30} />
              &nbsp; My Github
            </Link>
          </Item>
          <Item>
            <Link
              href="https://www.linkedin.com/in/mykhailo-sinkov/"
              target="_blank"
              rel="noopener, noreferrer"
            >
              <AiOutlineLinkedin size={30} /> &nbsp; My LinkedIn
            </Link>
          </Item>
        </Wrapper>

        <Item>
          Made by{' '}
          <InlineLink
            href="https://goit.ua/"
            target="_blank"
            rel="noopener, noreferrer"
          >
            GoIT{' '}
          </InlineLink>
          student Misha Sinkov, group FSOn#39, March 2022
        </Item>
      </List>
    </Footer>
  );
};
export default BottomNav;
