import React, {useState} from 'react';
import { NavWrapper, NavItems } from './Styles/Nav-Styles';
import logo from '../assets/logo.png';
import ContactModal from './Contact-Modal';

const Navigation = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        console.log('Contact Us Clicked');
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    }

    return(
        <NavWrapper>
            <NavItems>
                <img src={logo} alt='logo' />
                <p onClick={() => handleClick()}>Contact</p>
            </NavItems>
            {showModal ? <ContactModal handleClose={handleClose} /> : null}
        </NavWrapper>
    )
}

export default Navigation