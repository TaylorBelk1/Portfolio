import React, {Component} from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

// from blog-view
// title={post.title}
// image={post.thumbnail}
// link={post.link}
// date={post.pubDate}
const SinglePost = (props) => {
    return(
        <CardActionArea className="cardWrap">
            <a href={props.link}>
                <CardMedia>
                    <img
                        src={props.image}
                        alt={props.title}
                        className='blogImg'
                    />
                </CardMedia>
            </a>
            <CardContent>
                <p>{props.date}</p>
                <h3>{props.title}</h3>
            </CardContent>
        </CardActionArea>
    )
}

export default SinglePost