import React from 'react';
import Nav from './nav/nav';
import MainCard from './mainCard/mainCard';
import { MainWrap } from './styles/mainStyles';

const Main = () => {
    return(
        <MainWrap>
            <Nav />
            <MainCard />
        </MainWrap>
    )
}

export default Main