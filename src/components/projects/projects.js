import React from 'react';
import Nav from './../nav/nav';
import Footer from './../footer/footer';
import { AboutMeWrapper } from './../styles/about-me-styles';
import UnderConstruction from './../under-construction/under-construction';

const Project = () => {
    return (
      <AboutMeWrapper>
        <Nav />
            <UnderConstruction url={'https://github.com/TaylorBelk1'} text={'Click here to check out my GitHub'}/>
        <Footer />
      </AboutMeWrapper>
    );
  }
  
  export default Project;