import styled from 'styled-components';
import { sizing, media } from './Reusable/variables';

export const BlogWrapper = styled.div`
    width: 100%;
    margin-bottom: 20px;
    border-top: 1px solid #eee;
    min-height: 500px;
    height: 100%;
`

export const BlogContent = styled.div`
    width: ${sizing.contentWidth};
    margin: ${sizing.contentMargins};
    padding: 30px 0;

    h3 {
        font-size: 26px;
    }

    ${media.desktop} {
        width: 80%;
    }

    ${media.tablet} {
        width: 95%;
    }

    ${media.lgMobile} {
        width: 97%;
    }

    ${media.mobile} {
        width: 99%;
    }
`

export const BlogPostWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    ${media.tablet} {
        flex-direction: column;
    }
`

export const BlogCard = styled.div`
    width: 28%;
    padding: 15px;
    border: 1px solid #eee;
    color: black;
    border-radius: 15px;
    margin-top: 40px;
    box-shadow: 3px 3px 3px #eee;

    img {
        width: 90%;
    }

    ${media.tablet} {
        width: 50%;
        margin: 10px auto;
    }

    ${media.lgMobile} {
        width: 60%;
    }

    ${media.mobile} {
        width: 80%;
        margin: 10px auto;
    }
`