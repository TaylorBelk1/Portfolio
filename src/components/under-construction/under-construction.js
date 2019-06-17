import React from 'react';
import Nav from '../nav/nav';
import Footer from '../footer/footer';
import gear1 from '../../assets/gear500.png';
import gear2 from '../../assets/gear100.png';
import gear3 from '../../assets/gear50.png';
import { ButtonConstruction } from './../styles/buttonStyles';
import { GearWrap } from '../styles/under-construction-styles';

const UnderConstruction = (props) => {
    return (
        <GearWrap>
                <img src={gear2} alt='gear' className="gear"/>
                <img src={gear1} alt='gear' className="bigGear"/>
                <img src={gear2} alt='gear' className="gear"/>
                <h2>Sorry I am still being worked on!</h2>
                <h2>Come back soon!</h2>
                <ButtonConstruction>
                    <a href={props.url}>{props.text}</a>
                </ButtonConstruction>
        </GearWrap>
    )
}

export default UnderConstruction