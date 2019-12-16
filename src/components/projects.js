import React from 'react';
import {
    ProjectsWrap, ProjectsContent
} from './styles/projectsStyles';
import weather from '../assets/weather.PNG';
import SingleProjects from './singleProjects';

const Projects = () => {
    return (
        <ProjectsWrap>
            <ProjectsContent>
                <h3>Check out some of my Projects</h3>
                <SingleProjects img={weather} title={'Forecast It'} />
            </ProjectsContent>
        </ProjectsWrap>
    )
}

export default Projects
