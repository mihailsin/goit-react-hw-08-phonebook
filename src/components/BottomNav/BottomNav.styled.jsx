import styled from 'styled-components';
const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const List = styled.ul`
  color: #ffffff;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding-right: 40px;
`;

const Item = styled.li`
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
const Link = styled.a`
  color: #ffffff;
  text-decoration: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;
const Footer = styled.footer`
  position: sticky;
  bottom: 0;
  background-color: #252323;
  padding: 5px;
`;
export { List, Item, Link, Wrapper, Footer };
