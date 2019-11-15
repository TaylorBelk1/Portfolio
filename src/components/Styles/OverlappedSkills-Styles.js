import styled from 'styled-components';
import { colors, sizing } from './Reusable/variables';

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
`

export const SkillsContent = styled.div`
    display: flex;
    justify-content: space-between;
    width: 98%;
    margin: ${sizing.contentMargins};
`

export const Skill = styled.div`
    padding: 40px 0;
    width: 30%;
    margin: 0 auto;
    border-right: 1px solid #eee;
    line-height: 1.5;

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