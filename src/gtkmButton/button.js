import React from 'react';
import { Button } from './../components/styles/buttonStyles';
import {Link} from 'react-router-dom';

const FindMore = () => {
    return(
        <>
            <Link to='/about'>
                <Button>Get to Know Me</Button>
            </Link>
        </>
    )
}

export default FindMore