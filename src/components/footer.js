import React from 'react';
import {
    FooterWrap,
    IconsWrap
} from './styles/footerStyles';
import OverlappedContact from './overlappedContact';
import git from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import medium from '../assets/medium.png';
import stack from '../assets/stackoverflow.png';


const Footer = () => {
    return (
        <FooterWrap>
            <OverlappedContact />
            <IconsWrap>
                <a href='https://github.com/TaylorBelk1' target='_blank' rel="noopener noreferrer">
                    <img src={git} alt='github icon' />
                </a>
                <a href='https://www.linkedin.com/in/taylor-belk-387a63172/' target='_blank' rel="noopener noreferrer">
                    <img src={linkedin} alt='linkedin icon' />
                </a>
                <a href='https://medium.com/@belktaylor12' target='_blank' rel="noopener noreferrer">
                    <img src={medium} alt='medium icon' />
                </a>
                <a href='https://stackoverflow.com/users/11311941/taylor-belk' target='_blank' rel="noopener noreferrer">
                    <img src={stack} alt='stackoverflow icon' />
                </a>
            </IconsWrap>
            <p>Taylor Belk | 2019 </p>
        </FooterWrap>
    )
}

export default Footer
