import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Hero, About, Jobs, Contact } from '@components';
import CursorLight from '../components/cursorlight';
// import { ValueIBring } from '../components';
const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <CursorLight />
    <StyledMainContainer className="fillHeight">
      <Hero />
      <About />
      {/* <ValueIBring /> */}
      <Jobs />
      {/* <Projects /> */}
      <Contact />
    </StyledMainContainer>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
