import styled from 'styled-components';

export const GearWrap = styled.div`

    .bigGear {
        animation: big-gear-spin infinite 20s linear;
        @media(max-width: 1600px) {
            width: 350px;
        }
    }

    .gear {
        animation: gear-spin infinite 20s linear;
    }

    @keyframes gear-spin {
        from {
        transform: rotate(360deg);
        }
        to {
        transform: rotate(0deg);
        }
    }

    @keyframes big-gear-spin {
        from {
        transform: rotate(180deg);
        }
        to {
        transform: rotate(360deg);
        }
    }
`

export const ConstructionWrapper = styled.div`
    background: linear-gradient(to left bottom, #0a004f, #191d77, #233ba3, #255ad0, #167bff);
    color: white;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);

    @media(max-width: 1600px) {
        height: calc(var(--vh, 1vh) * 100);
    }

    @media(max-width: 1300px) {
        height: 100%;
        padding-bottom: 80px;
    }

    @media(max-width: 500px) {
        overflow-x: hidden;
    }
`