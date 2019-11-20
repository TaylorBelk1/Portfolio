import styled from './node_modules/styled-components';
import { colors, sizing, media } from './reusable/variables';

export const SkillsWrap = styled.div`
    width: 65%;
    min-height: 300px;
    height: auto;
    margin: ${sizing.contentMargins};

    border-radius: 15px;
    position: relative;
    top: -200px;
    left: 0;

    background-color: #fff;
    border: 1px solid #eee;
    box-shadow: 0 6px 6px -2px lightgray;
    font-size: 18px;

    ${media.desktop} {
        width: 80%;
    }

    ${media.tablet} {
        width: 90%;
    }

    ${media.mobile} {
        width: 98%;
    }

    ${media.xs} {
        top: -120px;
        width: 99%;
    }
`

export const SkillsContent = styled.div`
    display: flex;
    justify-content: space-between;
    width: 98%;
    margin: ${sizing.contentMargins};

    ${media.tablet} {
        flex-direction: column;
    }
`

export const Skill = styled.div`
    padding: 40px 0;
    width: 30%;
    margin: 0 auto;
    border-right: 1px solid #eee;
    line-height: 1.5;

    ${media.tablet} {
        width: 90%;
        border-right: none;
        border-bottom: 1px solid #eee;
    }

    ${media.mobile} {
        width: 95%;
    }

    ${media.xs} {
        width: 100%;
    }

    &:nth-child(3) {
        border-right: none;
    }

    h5 {
        font-size: 22px;
    }

    p {
        width: 85%;
        margin: ${sizing.contentMargins};
    }
`

export const Headlines = styled.p`
    color: ${colors.secondary};
    font-family: Roboto-Medium;
`