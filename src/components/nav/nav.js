import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavWrap, SpanStyle } from '../styles/navStyles';

const Nav = () => {
    return(
        <NavWrap>
            <SpanStyle>
                <NavLink to='/home' className='link' activeStyle={{textDecoration: 'underline'}}>
                    Home
                </NavLink>
            </SpanStyle>

            <SpanStyle>
                <NavLink to='/about' className="link" activeStyle={{textDecoration: 'underline'}}>
                    About Me
                </NavLink>
            </SpanStyle>

            <SpanStyle>
                <NavLink to='/projects' className="link" activeStyle={{textDecoration: 'underline'}}>
                    Projects
                </NavLink>
            </SpanStyle>

            <SpanStyle>
                <NavLink to='/blog' className="link" activeStyle={{textDecoration: 'underline'}}>
                    Blog
                </NavLink>
            </SpanStyle>

            <SpanStyle>
                <NavLink to='/contact' className="link" activeStyle={{textDecoration: 'underline'}}>
                    Contact
                </NavLink>
            </SpanStyle>
        </NavWrap>
    )
}

export default Nav