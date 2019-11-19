import React from 'react';
import {
    FooterWrap,
    IconsWrap
} from './Styles/Footer-styles';
import OverlappedContact from './Overlapped-Contact';
import git from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import medium from '../assets/medium.png';
import stack from '../assets/stackoverflow.png';


const Footer = () => {
    return (
        <FooterWrap>
            <OverlappedContact />
            <IconsWrap>
                <img src={git} alt='github icon' />
                <img src={linkedin} alt='linkedin icon' />
                <img src={medium} alt='medium icon' />
                <img src={stack} alt='medium icon' />
            </IconsWrap>
            <p>Taylor Belk | 2019 </p>
        </FooterWrap>
    )
}

export default Footer