import styled from 'styled-components';
import { colors, media } from './reusable/variables';

export const FooterWrap = styled.div`
    width: 100%;
    margin-top: 200px;
    background-color: ${colors.primary};
    min-height: 300px;
    color: #fff;

    p {
        margin-top: 50px;
        padding-bottom: 20px;
        font-family: Roboto-Thin;
    }

    ${media.mobile} {
        margin-top: 100px;
    }
`

export const IconsWrap = styled.div`
    display: flex;
    justify-content: space-between;
    width: 15%;
    margin: 0 auto;

    img {
        width: 30px;

        ${media.atomic} {
            width: 25px;
            height: auto;
        }
    }

    ${media.tablet} {
        width: 30%;
    }

    ${media.mobile} {
        width: 40%;
    }

    ${media.xs} {
        width: 60%;
    }
    ${media.atomic} {
        width: 80%;
    }
`