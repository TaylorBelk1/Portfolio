import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    BlogWrapper,
    BlogContent,
    BlogPostWrap,
} from './styles/blogStyles';
import BlogPost from './blogPost';


const Blog = () => {
    const [posts, setPosts] = useState([]);
    const url = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40belktaylor12%2F';

    useEffect(() => {
        axios.get(url)
        .then(res => handleSlice(res.data.items))
        .catch(err => console.log(err))
    }, []);

    const handleSlice = (arr) => {
        if(arr.length > 3) {
            setPosts(arr.slice(0,3));
        } else {
            setPosts(arr);
        }
    }

    return (
        <BlogWrapper>
            <BlogContent>
                <h3>Recent Blog Posts</h3>
                <BlogPostWrap>
                    {posts && posts.map(post => {
                        return <BlogPost key={post.guid} item={post} />
                    })}
                </BlogPostWrap>
            </BlogContent>
        </BlogWrapper>
    )
}

export default Blog