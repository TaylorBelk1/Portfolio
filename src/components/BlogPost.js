import React from 'react';
import {
    BlogCard
} from './Styles/Blog-Styles';

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