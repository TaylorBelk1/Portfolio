import React from 'react';
import avatar from '../../assets/emoji.png';
import { AvatarDiv } from './../styles/avatarStyles';

const Avatar = () => {
    return (
        <AvatarDiv>
            <img src={avatar} alt='avatar' />
        </AvatarDiv>
    )
}

export default Avatar