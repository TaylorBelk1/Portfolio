import React from 'react';
import { AboutMeWrapper } from '../styles/about-me-styles';
import Nav from '../nav/nav';
import FooterAbout from '../footer/footerAbout';
import AboutMeView from './about-me';

const AboutMe = () => {
    return (
        <>

            <AboutMeWrapper>
                <Nav />
                    <AboutMeView />
                <FooterAbout />
            </AboutMeWrapper>

        </>
    )
}

export default AboutMe