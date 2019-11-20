import React, {useState} from 'react';
import { NavWrapper, NavItems } from './styles/navStyles';
import logo from '../assets/logo.png';
import ContactModal from './contactModal';

const Navigation = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
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
