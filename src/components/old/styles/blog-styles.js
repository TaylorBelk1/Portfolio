import styled from 'styled-components';

export const PostsWrap = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    color: black;
    width: 85%;
    min-height: 400px;
    height: auto;
    margin: 5em auto;
    border-radius: 5px;
    text-align: center;
    padding: 20px 5px;

    h2 {
        margin-top: 5px;

        @media(max-width: 1300px) {
            margin-bottom: 5px;
        }
    }

    @media(max-width: 1300px) {
        width: 50%;
        margin: 1em auto .5em;
    }
    @media(max-width: 1086px) {
        width: 60%;
    }
    @media(max-width: 800px) {
        width: 70%;
    }
    @media(max-width: 600px) {
        width: 90%;
    }
`

export const BlogWrap = styled.div`
display: flex;
justify-content: space-around;
align-content: center;


.cardWrap {
    margin-top: 50px;
    min-width: 30%;

    @media(max-width: 1300px) {
        margin-top: 10px;
        width: 50%;
        min-width: 100%;
    }
}

.blogImg {
    min-width: 250px;
    max-width: 250px;
    height: auto;
  }

h3 {
    width: 250px;
    margin: 0 auto;
}

.load {
    margin-top: 160px;
}

@media(max-width: 1300px) {
    margin: 3.3em auto;
    flex-direction: column;
    align-content: space-around;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    width: 80%;
}

@media(max-width: 1086px) {
    margin: 3.3em auto;
}

@media(max-width: 580px) {
    margin: 1em auto;
    width: 95%;
}
`