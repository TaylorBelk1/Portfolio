import styled from 'styled-components';

export const BlogWrap = styled.div`
background: white;
color: black;
width: 85%;
min-height: 400px;
height: auto;
margin: 5em auto;
border-radius: 5px;
text-align: center;
padding: 20px 5px;
display: flex;
justify-content: space-around;
align-content: center;


.cardWrap {
    margin-top: 50px;
    min-width: 30%;
}

.blogImg {
    min-width: 250px;
    max-width: 250px;
    height: auto;
  }

h3 {
    width: 250px;
}

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
`