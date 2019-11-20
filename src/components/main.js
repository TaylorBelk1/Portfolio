import React from 'react';
import { AppWrapper } from './Styless/mainStyles';
import Navigation from './navigation';
import Banner from './banner';
import Banner3D from './banner3D';
import AboutMe from './aboutMe';
import OverlappedSkills from './overlappedSkills';
import Projects from './projects';
import Blog from './blog';
import Footer from './footer';

const Main = () => {
    return(
        <AppWrapper>
            <Navigation/>
            <Banner />
            <Banner3D />
            <AboutMe />
            <OverlappedSkills />
            <Projects />
            <Blog />
            <Footer />
        </AppWrapper>
    )
}

export default Main