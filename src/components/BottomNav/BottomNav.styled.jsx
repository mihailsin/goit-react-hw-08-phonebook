import styled from 'styled-components';
const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const List = styled.ul`
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
export { List, Item, Link, Wrapper };
