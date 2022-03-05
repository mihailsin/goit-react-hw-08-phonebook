import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
`;

const List = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
`;

export { Wrapper, Container, List };
