import React from 'react';
import github from '../../assets/github.png';
import linked from '../../assets/linkedin.png';
import medium from '../../assets/medium.png';
import stack from '../../assets/stackoverflox.png';
import { FooterWrap, SpanWrap } from '../styles/footerStyle';

const Footer = () => {
    return(
        <FooterWrap>
            <SpanWrap>
                <a href="https://github.com/TaylorBelk1">
                    <img src={github} alt="github icon" height="26" width="26" />
                </a>
            </SpanWrap>
            <SpanWrap>
                <a href="https://www.linkedin.com/in/taylor-belk-387a63172/">
                    <img src={linked} alt="linkedin icon" height="26" width="26" />
                </a>
            </SpanWrap>
            <SpanWrap>
                <a href="https://medium.com/@belktaylor12">
                    <img src={medium} alt="medium icon" height="26" width="26" />
                </a>
            </SpanWrap>
            <SpanWrap>
                <a href="https://stackoverflow.com/users/11311941/taylor-belk">
                    <img src={stack} alt="stackoverflow icon" height="26" width="26" />
                </a>
            </SpanWrap>
        </FooterWrap>
    )
}

export default Footer