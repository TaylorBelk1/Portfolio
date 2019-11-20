import React, {useState} from 'react';
import {
    ContactWrap,
    ContactContent
} from './styles/overlappedContactStyles';
import ContactModal from './contactModal';

const OverlappedContact = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    }

    return (
        <ContactWrap>
            <ContactContent>
                <div><h3>Let's Work Together</h3></div>
                <div>Lets talk about how I can help your dream come to life!</div>
                <div>
                    <button onClick={() => handleClick()}>
                        Let's Talk
                    </button>
                </div>
            </ContactContent>
            {showModal ? <ContactModal handleClose={handleClose} /> : null}
        </ContactWrap>
    )
}

export default OverlappedContact