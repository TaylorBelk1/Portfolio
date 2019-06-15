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
                <img src={github} alt="github icon" height="26" width="26" />
            </SpanWrap>
            <SpanWrap>
                <img src={linked} alt="linkedin icon" height="26" width="26" />
            </SpanWrap>
            <SpanWrap>
                <img src={medium} alt="medium icon" height="26" width="26" />
            </SpanWrap>
            <SpanWrap>
                <img src={stack} alt="stackoverflow icon" height="26" width="26" />
            </SpanWrap>
        </FooterWrap>
    )
}

export default Footer