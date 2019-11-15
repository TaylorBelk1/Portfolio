import styled from 'styled-components';
import { colors } from './Reusable/variables';

export const NavWrapper = styled.div`
    width: 100%;
    height: 150px;
    color: ${colors.primary};
`

export const NavItems = styled.div`
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;

    p {
        text-align: center;
        width: 120px;
        height: 30px;
        font-size: 24px;
        font-weight: normal;
        border: 2px solid ${colors.primary};
        border-radius: 50px;
        padding: 5px;
        align-self: center;
    }

    img {
        width: 150px;
    }
`