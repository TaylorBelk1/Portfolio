import styled from 'styled-components';

export const AvatarDiv = styled.div`
    padding: 1em;
    z-index: 9000;
    position: absolute;
    top: 5%;
    right: 3%;

    img {
        @media(max-width: 830px) {
            width: 250px;
        }
    }

    @media(max-width: 830px) {
        top: 35%;
        right: 33%;
    }

    @media(max-width: 720px) {
        display: none;
    }
`


