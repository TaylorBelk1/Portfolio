import React from 'react';
import { NavWrapper, NavItems } from './Styles/Nav-Styles';
import logo from '../assets/logo.png';

const Navigation = () => {
    return(
        <NavWrapper>
            <NavItems>
                <img src={logo} alt='logo' />
                <p>Contact</p>
            </NavItems>
        </NavWrapper>
    )
}

export default Navigation