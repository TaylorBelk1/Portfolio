import React from 'react';
import Nav from './../nav/nav';
import FooterAbout from './../footer/footerAbout';
import { AboutMeWrapper } from '../styles/about-me-styles';
import UnderConstruction from '../under-construction/under-construction';
import {ConstructionWrapper} from '../styles/under-construction-styles';
import GetBlog from './get-blog';

const Blog = () => {
    return (
      <ConstructionWrapper>
        <Nav />
          <GetBlog />
            {/* <UnderConstruction url={'https://medium.com/@belktaylor12'} text={'Click here to check out my Medium'}/> */}
          <FooterAbout />
      </ConstructionWrapper>
    );
  }

  export default Blog;