import styled from 'styled-components';
import { colors, sizing, media } from './Reusable/variables';

export const AboutMeWrapper = styled.div`
    margin-top: 160px;
    width: 100%;
    min-width: 100vw;
    min-height: 500px;
    background-color: ${colors.primary};
    padding: 30px 0;

    ${media.lgMobile} {
        margin-top: 50px;
    }

    ${media.xs} {
        padding-top: 5px;
        font-size: 16px;
    }
`

export const ContentWrap = styled.div`
    padding-top: 80px;
    width: ${sizing.contentWidth};
    margin: ${sizing.contentMargins};
    color: #fff;
    font-size: 20px;
    text-align: center;
    line-height: 1.5;

    ${media.tablet} {
        padding-top: 20px;
        width: 80%;
    }

    ${media.mobile} {
        padding-top: 0;
        width: 90%;
    }
`

export const ByLine = styled.h4`
    font-size: 28px;
`