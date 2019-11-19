import React from 'react';
import {
    ProjectsWrap, ProjectsContent
} from './Styles/Projects-Styles';

const Projects = () => {
    return (
        <ProjectsWrap>
            <ProjectsContent>
                <h3>Check out some of my Projects</h3>
                <p>Currently hard at work getting applications deployed.
                    Take a look at my <a href='https://github.com/TaylorBelk1' target='_blank'>Github</a> while you wait!
                </p>
            </ProjectsContent>
        </ProjectsWrap>
    )
}

export default Projects