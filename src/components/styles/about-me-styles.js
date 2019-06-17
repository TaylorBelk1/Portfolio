import styled from 'styled-components';

export const AboutMeWrapper = styled.div`
    width: 100%;
    background: linear-gradient(to left bottom, #0a004f, #191d77, #233ba3, #255ad0, #167bff);
    color: white;
    height: 100%;

    @media(max-width: 1300px) {
        height: auto;
        padding-bottom: 70px;
    }

    @media(max-width: 500px) {
      overflow-x: hidden;
    }
`

export const AboutMeViewWrap = styled.div`
    background: white;
    color: black;
    width: 70%;
    height: auto;
    padding-bottom: 3em;
    margin: 80px auto;
    border-radius: 5px;

    @media(max-width: 1300px) {
        height: auto;
    }

    @media(max-width: 830px) {
      width: 90%;
    }

    @media(max-width: 520px) {
      width: 95%;
      margin-top: 20px;
    }
`

export const AboutMeBoxWrapper = styled.div`
  width: 95%;
  display: flex;
  height: auto;

  @media(max-width: 1300px) {
      flex-direction: column;
  }
`

export const AboutTextBox = styled.div`
    margin: 0 auto;
    width: 50%;
    word-wrap: normal;
    padding-top: 2em;
    text-align: justify;
    line-height: 1.5em;

  h3 {
    text-align: center;
    text-decoration: underline;
    font-size: 2em;

    @media(max-width: 420px) {
      line-height: 1.5em;
      width: 100%;
    }
  }

  @media(max-width: 1300px) {
    line-height: 1.5em;
    width: 85%;
    margin: 0 auto;
  }

  @media(max-width: 420px) {
    line-height: 1.7em;
    font-size: 18px;
    width: 90%;
    padding: .5em;
  }
`

export const AvatarBox = styled.div`
    padding-right: 3em;
    margin-top: 5em;
    padding-left: 5em;

    @media(max-width: 1300px) {
        margin: 0 auto;
        margin-top: 3em;
        padding: 0;
    }

    @media(max-width: 380px) {
      width: 0;
      height: 0;
      margin: 0;
      padding: 0;

      img {
        display: none;
      }
    }
`

export const CardWrap = styled.div`
    width: 25%;
    word-wrap: break-word;
    padding: 1em;
    margin: 4em auto;
    text-align: center;
    background: linear-gradient(to left bottom, #0a004f, #191d77, #233ba3, #255ad0, #167bff);
    color: white;
    border-radius: 25px;

    .tech-img {
        width: 70px;
        height: 70px;
        border-bottom: 2px solid white;
        padding-bottom: .5em;
      }

    @media(max-width: 1300px) {
        width: 40%;
    }

    @media(max-width: 1000px) {
      width: 60%;
    }
`