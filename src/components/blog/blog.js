import React from 'react';
import Nav from './../nav/nav';
import Footer from './../footer/footer';
import { AboutMeWrapper } from './../styles/about-me-styles';
import UnderConstruction from './../under-construction/under-construction';
import {ConstructionWrapper} from '../styles/under-construction-styles';

const Blog = () => {
    return (
      <ConstructionWrapper>
        <Nav />
            <UnderConstruction url={'https://medium.com/@belktaylor12'} text={'Click here to check out my Medium'}/>
        <Footer />
      </ConstructionWrapper>
    );
  }

  export default Blog;