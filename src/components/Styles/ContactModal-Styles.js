import styled from 'styled-components';
import { colors, media } from './Reusable/variables';

export const ModalWrap = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(149, 149, 149, 0.8);
`

export const ModalContentWrap = styled.div`
    position: relative;
    top: 15%;
    left: 0;
    z-index: 9999;
    width: 40%;
    margin: 0 auto;
    min-height: 150px;
    height: auto;
    background-color: #fff;
    border-radius: 8px;
    padding-bottom: 5px;

    .loading {
        margin: 70px auto;
    }

    ${media.desktop} {
        width: 70%;
    }

    ${media.tablet} {
        width: 80%;
    }

    ${media.mobile} {
        width: 90%;
    }
`

export const HeaderWrap = styled.div`
    width: 90%;
    margin: 40px auto 0;

    h4 {
        font-size: 26px;
        padding-top: 20px;
    }

    #close {
        width: 25px;
        height: 25px;
        position: absolute;
        top: 10px;
        right: 10px;
    }
`

export const FormWrap = styled.form`
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`

export const InputWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const InputField = styled.input`
    border: none;
    border-bottom: 1px solid ${colors.primary};
    width: 45%;
    padding: 5px;
`

export const TextArea = styled.textarea`
    width: 100%;
    margin: 20px auto;
    height: 100px;
    border: 1px solid ${colors.primary};
    font-family: Roboto-Regular;
    padding: 5px;
`

export const Button = styled.button`
    width: 20%;
    margin: 0 auto;
    border: 2px solid ${colors.primary};
    border-radius: 20px;
    color: ${colors.primary};
    font-size: 22px;
    background-color: #fff;
    padding: 5px;
    margin-bottom: 20px;

    ${media.tablet} {
        width: 30%;
    }

    ${media.xs} {
        width: 50%;
    }
`

export const Success = styled.div`
    font-size: 28px;
`