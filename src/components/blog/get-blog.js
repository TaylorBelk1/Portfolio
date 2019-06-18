import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import BlogView from './blog-view';
import axios from 'axios';

export default class GetBlog extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            isLoading: false
        }
    };

    componentDidMount() {
        this.getPosts();
        this.setState({isLoading: true})
    }

    getPosts = () => {
        const url = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40belktaylor12%2F';
        axios.get(url)
            .then(res => {
                if(res.status === 200) {
                    this.setState({
                        articles: res.data.items,
                        isLoading: false
                    })
                    console.log(res)
                } else {
                    console.log(res.status, 'error');
                }
            }).catch(e => console.log(e))
    }

    render() {
        console.log(this.state.articles)
        return (
        <div>
            {this.state.isLoading ?
                <CircularProgress /> :
                <BlogView posts={this.state.articles}/>
            }
        </div>)
    }
}