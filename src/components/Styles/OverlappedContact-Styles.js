import styled from './node_modules/styled-components';
import { colors, media } from './reusable/variables';

export const ContactWrap = styled.div`
    width: 60%;
    margin: 0 auto;
    min-height: 150px;
    border-radius: 15px;
    background-color: ${colors.dark};
    position: relative;
    top: -70px;
    left: 0;
    color: #FFF;
    box-shadow: 0 3px 8px #2E2E2E;

    ${media.desktop} {
        width: 70%;
    }

    ${media.tablet} {
        width: 90%;
    }

    ${media.lgMobile} {
        width: 95%;
    }
`

export const ContactContent = styled.div`
    width: 98%;
    min-height: 150px;
    height: auto;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-content: center;

    div {
        align-self: center;
        align-items: center;
        width: 30%;
        height: 100%;
        font-family: Roboto-Thin;

        ${media.mobile} {
            width: 80%;
            padding: 10px 0;
        }
    }

    h3 {
        font-size: 28px;
        font-family: Montserrat-Black;
        align-self: center;

        ${media.lgMobile} {
            font-size: 20px;
        }

        ${media.mobile} {
            font-size: 18px;
        }
    }

    button {
        width: 180px;
        height: 45px;
        align-self: center;
        text-align: center;
        font-size: 24px;
        font-family: Roboto-Regular;
        border: 2px solid ${colors.primary};
        border-radius: 50px;
        padding: 5px;
        color: #fff;
        background-color: ${colors.dark};

        ${media.lgMobile} {
            font-size: 20px;
            width: 130px;
        }

        ${media.mobile} {
            font-size: 18px;
            width: 130px;
        }
    }

    button:hover {
        border: 2px solid ${colors.secondary};
    }

    ${media.mobile} {
        width: 99%;
    }

    ${media.mobile} {
        padding: 20px 0;
        display: flex;
        flex-direction: column;
    }
`