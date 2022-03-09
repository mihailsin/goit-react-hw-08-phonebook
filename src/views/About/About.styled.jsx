import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;
  column-gap: 40px;
  row-gap: 40px;
`;
const GridItem = styled.div``;
const Wrapper = styled.div`
  padding: 100px;
  padding-top: 40px;
`;
const Header = styled.h1`
  text-align: center;
  margin-bottom: 40px;
`;
export { GridContainer, GridItem, Wrapper, Header };
