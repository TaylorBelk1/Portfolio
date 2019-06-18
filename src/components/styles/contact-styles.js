import styled from 'styled-components';

export const ContactWrapper = styled.div`
    background: linear-gradient(to left bottom, #0a004f, #191d77, #233ba3, #255ad0, #167bff);
    color: white;
    height: 100vh;

    @media(max-width: 580px) {
        height: 100vh;
    }
`

export const ContactWrap = styled.div`
    background: white;
    color: black;
    width: 60%;
    min-height: 400px;
    height: auto;
    margin: 5em auto;
    border-radius: 5px;
    text-align: center;
    padding-bottom: 5px;

    .load {
        margin-top: 160px;
    }

    @media(max-width: 1300px) {
        margin: 3.3em auto;
    }

    @media(max-width: 1086px) {
        margin: 3.3em auto;
        width: 70%;
    }

    @media(max-width: 580px) {
        margin: 1em auto;
        width: 90%;
    }

    @media(max-width: 320px) {
        margin: 1em auto;
        width: 90%;
    }
`

export const ContactViewWrap = styled.div`
    h2 {
        padding: 2em 1em 0;
    }

    form {
        width: 90%;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        text-align: center;
    }
`
export const SuccessWrapper = styled.div`
    h1 {
        padding-top: 5%;
    }

    #success {
        width: 150px;
    }
`