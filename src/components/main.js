import React from 'react';
import { AppWrapper } from './Styles/Main-Styles';
import Navigation from './Navigation';
import Banner from './Banner';
import Banner3D from './3D/Banner3D';
import AboutMe from './AboutMe';
import OverlappedSkills from './OverlappedSkills';
import Projects from './Projects';
import Blog from './Blog';
import Footer from './Footer';

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