import React from 'react';
import {
    AboutMeWrapper,
    ContentWrap,
    ByLine
} from './styles/aboutMeStyles';


const AboutMe = () => {
    return (
        <AboutMeWrapper>
            <ContentWrap>
                <ByLine>Hey there, I'm Taylor!</ByLine>
                <p>I am a Full-Stack Web Developer. I have a three years of experience creating web based applications using technologies such as ReactJS, Angular 2+, Bootstrap, Material UI, NodeJS, Express, SQL, GraphQL, PostGres, and even a bit of Java! I pick up new technologies very quickly and enjoy constantly challenging myself.</p>
            </ContentWrap>
        </AboutMeWrapper>
    )
}

export default AboutMe
