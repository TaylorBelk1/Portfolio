import styled from 'styled-components';
import { sizing, media } from './reusable/variables';

export const ProjectsWrap = styled.div`
    width: 100%;
    min-height: 500px;
    margin-top: -75px;

    ${media.lgMobile} {
        margin-top: -120px;
    }

    ${media.atomic} {
        margin-top: 20px;
    }
`

export const ProjectsContent = styled.div`
    width: ${sizing.contentWidth};
    margin: ${sizing.contentMargins};
    font-size: 18px;

    h3 {
        font-size: 26px;
    }
`