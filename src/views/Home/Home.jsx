import React from 'react';
import { GridContainer, GridItem, Wrapper, Header } from './Home.styled';
import { ImHtmlFive } from 'react-icons/im';
import { FaJsSquare, FaReact, FaCss3Alt } from 'react-icons/fa';
import {
  SiRedux,
  SiMaterialui,
  SiReactrouter,
  SiStyledcomponents,
  SiWebpack,
} from 'react-icons/si';
import BottomNav from 'components/BottomNav';

const Home = () => {
  return (
    <>
      <Wrapper>
        <Header>Tech stack used in project:</Header>
        <GridContainer>
          <GridItem>
            <ImHtmlFive size={200} />
          </GridItem>
          <GridItem>
            <FaCss3Alt size={200} />
          </GridItem>
          <GridItem>
            <FaJsSquare size={200} />
          </GridItem>
          <GridItem>
            <FaReact size={200} />
          </GridItem>
          <GridItem>
            <SiRedux size={200} />
          </GridItem>
          <GridItem>
            <SiReactrouter size={200} />
          </GridItem>
          <GridItem>
            <SiMaterialui size={200} />
          </GridItem>
          <GridItem>
            <SiStyledcomponents size={200} />
          </GridItem>
          <GridItem>
            <SiWebpack size={200} />
          </GridItem>
        </GridContainer>
      </Wrapper>
      <BottomNav />
    </>
  );
};

export default Home;
