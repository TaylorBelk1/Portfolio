import React from 'react';
import {
    BlogCard
} from './styles/blogStyles';

const BlogPost = (props) => {
    const {item} = props;


    return (
        <BlogCard>
            <a href={item.link} target='_blank' rel="noopener noreferrer">
                <h4>{item.title}</h4>
                <img src={item.thumbnail} alt='thumbnail' />
            </a>
        </BlogCard>
    )
}

export default BlogPost
