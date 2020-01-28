import styled from 'styled-components';
import { colors, sizing, media } from './reusable/variables';

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

    h3 {
        font-size: 26px;
        margin-bottom: 50px;
    }
`

export const ProjectsContent = styled.div`
    width: ${sizing.contentWidth};
    margin: ${sizing.contentMargins};
    font-size: 18px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    ${media.lgMobile} {
        flex-direction: column;
        align-items: center;
    }
`

export const ProjectWrap = styled.div`
    width: 300px;
    height: 300px;
    background-color: ${colors.primary};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;

    .displayed {
        padding: 5px;
    }

    h4 {
        font-size: 22px;
    }

    .no_show {
        display: none;
    }

    ${media.lgMobile} {
        margin-bottom: 20px;
    }
`

export const ButtonWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 30px;

    .button-link {
        width: 150px;
        border: 2px solid #fff;
        margin-bottom: 10px;
        border-radius: 2px;
        padding: 2px;
    }
`