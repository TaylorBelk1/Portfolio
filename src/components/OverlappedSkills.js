import React from 'react';
import { SkillsWrap, SkillsContent, Skill, Headlines } from './styles/overlappedSkills-styles';

import website from '../assets/website.png';
import coding from '../assets/coding.png';
import think from '../assets/think.png';

const OverlappedSkills = () => {
    return (
        <SkillsWrap>
            <SkillsContent>
                <Skill>
                    <img src={website} alt='website' />
                    <h5>Front End Developer</h5>
                    <p>I love creating simple and sleek UI's that create an easy to use and interactive experience.</p>
                    <p>&nbsp;</p>

                    <Headlines>Languages I speak:</Headlines>
                    <p> JavaScript, TypeScript, HTML5, CSS3, Java, C#, VB.net </p>

                    <p>&nbsp;</p>
                    <Headlines>Frameworks I work with:</Headlines>
                    <p>ReactJS</p>
                    <p>Angular</p>

                    <p>&nbsp;</p>
                    <Headlines>UI Libraries:</Headlines>
                    <p>Styled Components</p>
                    <p>BootStrap</p>
                    <p>Material UI</p>
                    <p>Styled Components</p>
                    <p>LESS/SASS</p>

                    <p>&nbsp;</p>
                    <Headlines>Testing tools:</Headlines>
                    <p>Jest</p>
                    <p>Karma</p>
                    <p>Jasmin</p>

                    <p>&nbsp;</p>
                    <Headlines>Other tools/libraries:</Headlines>
                    <p>Redux</p>
                    <p>GitHub</p>
                    <p>TFS</p>
                    <p>URQL</p>
                    <p>Relay</p>
                    <p>Apollo</p>
                </Skill>

                <Skill>
                    <img src={coding} alt='backend coding' />
                    <h5> Back End Developer </h5>
                    <p> I enjoy creating robust and efficient backends with organized and well thought out database schema's. </p>
                    <p>&nbsp;</p>
                    <Headlines>Server technology:</Headlines>
                    <p>NodeJS</p>
                    <p>Express</p>
                    <p>Prisma</p>
                    <p>Apache</p>
                    <p>IBM Websphere</p>

                    <p>&nbsp;</p>
                    <Headlines>Database technology:</Headlines>
                    <p>Sql</p>
                    <p>Sqlite 3</p>
                    <p>Postgres</p>
                    <p>Knex</p>

                    <p>&nbsp;</p>
                    <Headlines>Testing:</Headlines>
                    <p>Supertest</p>
                    <p>Jest</p>

                    <p>&nbsp;</p>
                    <Headlines>Deployment:</Headlines>
                    <p>Heroku</p>
                    <p>Netlify</p>

                    <p>&nbsp;</p>
                    <Headlines>Other Tools/Libraries:</Headlines>
                    <p>GraphQL</p>
                    <p>Rest</p>
                    <p>Bcrypt</p>
                    <p>JSON Web Tokens</p>
                </Skill>

                <Skill>
                    <img src={think} alt='light bulb' />
                    <h5>Life Long Learner</h5>
                    <p>Learning has always been a passion of mine. I am always looking for something new and challenging to dig into!</p>

                    <p>&nbsp;</p>
                    <Headlines>Currently learning:</Headlines>
                    <p>WebGL</p>
                    <p>Complex Animations</p>
                    <p>Deeper understanding of UI/UX</p>
                    <p>Python</p>

                    <p>&nbsp;</p>
                    <Headlines>Interested in learning:</Headlines>
                    <p>Machine Learning/AI</p>
                    <p>Crypto-Currency</p>
                    <p>Ruby on Rails</p>
                    <p>Photoshop</p>
                    <p>Blender</p>

                </Skill>
            </SkillsContent>
        </SkillsWrap>
    )
}

export default OverlappedSkills