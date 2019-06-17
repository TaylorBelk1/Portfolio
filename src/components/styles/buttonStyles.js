import styled from 'styled-components';

export const Button = styled.button`
    margin-top: 3%;
    font-size: 26px;
    padding: 20px 22px;
    border: none;
    border-radius: 40px;
    background: linear-gradient(to left bottom, #0a004f, #191d77, #233ba3, #255ad0, #167bff);
    color: white;

    @media(max-width: 520px) {
        font-size: 20px;
        margin-top: 0;
    }
`

export const ButtonConstruction = styled.button`
    margin-top: 3%;
    font-size: 26px;
    padding: 20px 22px;
    border: 2px solid white;
    border-radius: 40px;
    background: linear-gradient(to left bottom, #0a004f, #191d77, #233ba3, #255ad0, #167bff);
    color: white;

    @media(max-width: 1300px) {
        font-size: 20px;
    }
`

export const ButtonForm = styled.button`
    width: 40%;
    margin: 3% auto 5%;
    font-size: 20px;
    padding: 15px 15px;
    border: none;
    border-radius: 40px;
    background: linear-gradient(to left bottom, #0a004f, #191d77, #233ba3, #255ad0, #167bff);
    color: white;
`