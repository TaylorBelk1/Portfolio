import React from 'react';
import { NavWrap, SpanStyle } from '../styles/navStyles';

const Nav = () => {
    return(
        <NavWrap>
            <SpanStyle>About Me</SpanStyle> &nbsp;
            <SpanStyle>Projects</SpanStyle> &nbsp;
            <SpanStyle>Blog</SpanStyle> &nbsp;
            <SpanStyle>Contact</SpanStyle> &nbsp;
        </NavWrap>
    )
}

export default Nav