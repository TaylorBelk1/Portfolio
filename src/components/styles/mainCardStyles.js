import styled from 'styled-components';

export const CardWrap = styled.div`
    width: 40%;
    border: white;
    padding: 5px 6em;
    margin-top: 80px;

    @media(max-width: 830px) {
        width: 100%;
        margin: 0 auto;
        margin-top: 60px;
        padding: 0;
    }

    @media(max-width: 720px) {
        width: 70%;
    }

    @media(max-width: 520px) {
        width: 90%;
    }

    @media(max-width: 320px) {
        width: 100%;
    }
`

export const HeaderStyle = styled.h1`
    font-size: 60px;
    margin: 0 auto;
    color: white;

    @media(max-width: 1086px) {
        font-size: 45px;
    }

    @media(max-width: 720px) {
        font-size: 50px;
    }

    @media(max-width: 520px) {
        font-size: 45px;
    }

    @media(max-width: 320px) {
        font-size: 36px;
    }
`