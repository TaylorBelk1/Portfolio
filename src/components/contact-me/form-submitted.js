import React from 'react';
import { ContactViewWrap, SuccessWrapper } from '../styles/contact-styles';
import check from '../../assets/success.png';

const Submitted = () => {
    return(
        <ContactViewWrap>
            <SuccessWrapper>
                <h1>Success!</h1>
                <img src={check} alt='checkmark' id='success'/>
                <h3>Your message has been sent and I will get back to you ASAP</h3>
                <h3>Thank you for your interest and have a great day!</h3>
            </SuccessWrapper>
        </ContactViewWrap>
    )
}

export default Submitted