import React from 'react';
import {
    ContactWrap,
    ContactContent
} from './styles/overlappedContact-styles';

const OverlappedContact = () => {
    return (
        <ContactWrap>
            <ContactContent>
                <div><h3>Let's Work Together</h3></div>
                <div>Lets talk about how I can help your dream come to life!</div>
                <div><button>Let's Talk</button></div>
            </ContactContent>
        </ContactWrap>
    )
}

export default OverlappedContact