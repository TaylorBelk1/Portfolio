import styled from 'styled-components';

export const GearWrap = styled.div`
    .bigGear {
        animation: big-gear-spin infinite 20s linear;
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

    @media(max-width: 1300px) {
        .bigGear {
            width: 260px;
        }
    }
`

export const ConstructionWrapper = styled.div`
    background: linear-gradient(to left bottom, #0a004f, #191d77, #233ba3, #255ad0, #167bff);
    color: white;
    height: 100vh;
`