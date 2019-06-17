import styled from 'styled-components';

export const FooterWrap = styled.div`
    height: 30px;
    z-index: 9000;
    display: flex;
    position: fixed;
    bottom: 0;
    right: 0;
    padding-right: 2%;
    padding-bottom: 1%;
`

export const SpanWrap = styled.span`
    justify-content: flex-end
    align-content: center;
    padding-left: 15px;
`

export const FooterWrapAbout = styled.div`
    height: 30px;
    z-index: 9000;
    display: flex;
    position: fixed;
    bottom: 0;
    right: 0;
    padding-right: 2%;
    padding-bottom: 1%;

    @media(max-width: 1100px) {
        position: relative;
        margin-bottom: -50px;
    }

    @media(max-width: 500px) {
        right: -25%;
    }
`