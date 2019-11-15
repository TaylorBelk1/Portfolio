import React from 'react';
import { AppWrapper } from './Styles/Main-Styles';
import Navigation from './Navigation';
import Banner from './Banner';
import Banner3D from './3D/Banner3D';
import AboutMe from './AboutMe';
import OverlappedSkills from './OverlappedSkills';
import Projects from './Projects';

const Main = () => {
    return(
        <AppWrapper>
            <Navigation/>
            <Banner />
            <Banner3D />
            <AboutMe />
            <OverlappedSkills />
            <Projects />
        </AppWrapper>
    )
}

export default Main