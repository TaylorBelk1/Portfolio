import React from 'react';
import {
    ProjectsWrap, ProjectsContent
} from './styles/projectsStyles';
import SingleProjects from './singleProjects';

const data = [
    {
        title: 'Forecast It',
        description: 'Weather forecasting application built with ReactJS. Uses AccuWeather API to pull local weather data.',
        live_link: 'https://forecast-it.netlify.com/',
        github_link: 'https://github.com/TaylorBelk1/ForecastIt'
    },
    {
        title: 'Legend of Lambda',
        description: 'Browser based MUD-RPG game. Built using React and typescript. Connected to a python/django backend.',
        live_link: 'https://legend-of-lambda.netlify.com/',
        github_link: 'https://github.com/LegendOfLambda/LoL-frontend'
    }
]

const Projects = () => {
    return (
        <ProjectsWrap>
            <h3>Check out some of my Projects</h3>
            <ProjectsContent>
                {data.map(item => {
                    return <SingleProjects key={item.title} data={item} />
                })}
            </ProjectsContent>
        </ProjectsWrap>
    )
}

export default Projects
