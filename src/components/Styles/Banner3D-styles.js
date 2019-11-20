import styled from './node_modules/styled-components';
import { media } from './reusable/variables';

export const Banner3DWrap = styled.div`
    width: 100%;
    height: 400px
    margin: 50px auto;
    padding-bottom: 20px;

    h3 {
        margin: 90px;
        font-size: 28px;
        font-family: Roboto-Regular;

        ${media.lgMobile} {
            font-size: 24px;
        }
    }

    ${media.mobile} {
        display: none;
    }
`

export const AnimationWrap = styled.div`
    width: 100%;
    height: 400px;
    position: absolute;

    ${media.desktop} {
        img {
            width: 70px;
            height: auto;
        }
    }

    ${media.lgMobile} {
        img {
            width: 40px;
            height: auto;
        }
    }
`

export const Divider = styled.div`
    width: 10%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`

export const Dot = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: #eee;
`