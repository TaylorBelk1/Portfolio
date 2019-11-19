import styled from 'styled-components';
import { media } from './Reusable/variables';

export const BannerWrapper = styled.div`
    width: 100%;
    font-size: 26px;
    font-family: Roboto-Thin;

    h3 {
        font-size: 38px;
    }

    ${media.desktop} {
        width: 98%;
        margin: 0 auto;
    }

    ${media.lgMobile} {
        width: 95%;
    }
`