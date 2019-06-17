import React from 'react';
import Nav from './nav/nav';
import MainCard from './mainCard/mainCard';
import { MainWrap } from './styles/mainStyles';
import Avatar from '../components/avatar/avatar';
import Footer from '../components/footer/footer';
import FindMore from '../gtkmButton/button';
import { Route } from 'react-router-dom';

const Main = () => {
    return(
        <>
        <MainWrap>
            <Nav />
            <MainCard />
        </MainWrap>
        <Avatar />
        <FindMore />
        <Footer />
        </>
    )
}

export default Main