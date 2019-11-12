import styled from 'styled-components';

export const MainWrap = styled.div`
    height: 700px;
    background: linear-gradient(to left bottom, #0a004f, #191d77, #233ba3, #255ad0, #167bff);
    -webkit-clip-path: polygon(1% 0%, 100% 0%, 100% 18%, 0% 40%);
    clip-path: polygon(0% 0%, 100% 0%, 100% 50%, 0% 100%);

    @media(max-width: 1600px) {
        height: 550px;
    }

    @media(max-width: 1086px) {
        height: 500px;
    }

    @media(max-width: 830px) {
        height: 78vh;
        -webkit-clip-path: polygon(1% 0%, 100% 0%, 100% 18%, 0% 40%);
        clip-path: polygon(0% 0%, 100% 0%, 100% 70%, 0% 100%);
    }

    @media(max-width: 520px) {
        height: 80vh
    }
`