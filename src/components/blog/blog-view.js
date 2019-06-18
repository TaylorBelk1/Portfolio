import React, {Component} from 'react';
import SinglePost from './single-post';
import Blog from './blog';
import { BlogWrap } from '../styles/blog-styles';
import Card from '@material-ui/core/Card';

import Button from '@material-ui/core/Button';

const BlogView = (props) => {
    return(
        <BlogWrap>
            {props.posts.map(post => {
                return(
                <Card key={post.pubDate}>
                    <SinglePost
                        title={post.title}
                        image={post.thumbnail}
                        link={post.link}
                        date={post.pubDate}
                    />
                </Card>
            )})}

        </BlogWrap>
    )
}

export default BlogView