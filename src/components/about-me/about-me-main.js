import React from 'react';
import { AboutMeWrapper } from '../styles/about-me-styles';
import Nav from '../nav/nav';
import Footer from '../footer/footer';
import AboutMeView from './about-me';

const AboutMe = () => {
    return (
        <>
            
            <AboutMeWrapper>
                <Nav />
                    <AboutMeView />
                <Footer />
            </AboutMeWrapper>
            
        </>
    )
}

export default AboutMe