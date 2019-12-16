import React from 'react'
import { ProjectWrap } from './styles/projectsStyles';

const SingleProjects = (props) => {
    const { img, title } = props;

    return (
        <ProjectWrap>
            <h4>{title}</h4>
            <a href='https://forecast-it.netlify.com/' target='_blank'><img src={img} alt='project snip' /></a>
        </ProjectWrap>
    )
}

export default SingleProjects
