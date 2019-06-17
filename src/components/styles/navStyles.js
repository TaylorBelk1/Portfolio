import styled from 'styled-components';

export const NavWrap = styled.div`
    height: 50px;
    padding: 1em;
    color: white
    display: flex;
    justify-content: flex-end;

    @media(max-width: 520px) {
        justify-content: center;
    }
`

export const SpanStyle = styled.span`
    font-size: 20px;
    align-items: center;
    margin-left: 1em;

    @media(max-width: 830px) {
        font-size: 16px;
    }

    @media(max-width: 380px) {
        font-size: 13px;
    }

`

