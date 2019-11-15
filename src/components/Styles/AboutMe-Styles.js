import styled from 'styled-components';
import { colors, sizing } from './Reusable/variables';

export const AboutMeWrapper = styled.div`
    margin-top: 160px;
    margin-bottom: 20px;
    width: 100%;
    min-height: 500px;
    height: auto;
    background-color: ${colors.primary};
    padding: 30px 0;
`

export const ContentWrap = styled.div`
    padding-top: 80px;
    width: ${sizing.contentWidth};
    margin: ${sizing.contentMargins};
    color: #fff;
    font-size: 20px;
    text-align: center;
    line-height: 1.5;
`

export const ByLine = styled.h4`
    font-size: 28px;
`