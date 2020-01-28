import React, { useState } from 'react'
import { ProjectWrap, ButtonWrap } from './styles/projectsStyles';

const SingleProjects = (props) => {
    const { title, live_link, github_link, description } = props.data;
    const [show, setShow] = useState(false);

    const handleMouseEnter = (e) => {
        setShow(true);
    }

    const handleMouseLeave = (e) => {
        setShow(false)
    }

    return (
        <ProjectWrap
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={() => handleMouseLeave()}
        >
            <h4 className={!show ? 'displayed' : 'no_show'}>{title}</h4>
            <div  className={show ? 'displayed' : 'no_show'}>
                <p>
                    {description}
                </p>
                <ButtonWrap>
                    <a
                        href={live_link}
                        target='_blank'
                        rel="noopener noreferrer"
                        className='button-link'>
                        See it Live
                    </a>

                    <a
                        href={github_link}
                        target='_blank'
                        rel="noopener noreferrer"
                        className='button-link'>
                        See the Code
                    </a>
                </ButtonWrap>
            </div>
        </ProjectWrap>
    )
}

export default SingleProjects
