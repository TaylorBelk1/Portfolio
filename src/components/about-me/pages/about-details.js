import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Me from '../../../assets/me.jpg'
import { AboutTextBox, AboutMeBoxWrapper, AvatarBox } from '../../styles/about-me-styles';

const useStyles = makeStyles({
  bigAvatar: {
    margin: 20,
    width: 300,
    height: 300,
  },
});

export default function About() {
  const classes = useStyles();

  return (
    <AboutMeBoxWrapper>
        <AvatarBox>
            <Avatar alt="Taylor" src={Me} className={classes.bigAvatar} />
        </AvatarBox>
        <AboutTextBox>
            <h3>Hey there, I'm Taylor!</h3>
            <p>I am a Full-Stack Web Developer. I have a year of experience creating web based applications. I discovered my passion for coding while working as an IT Support technician where I had to create simple scripts to automate mundane tasks. I found that I was pretty good at it and enjoyed challenging my mind to come up with new ways to simplify our lives.</p>
            <p>After I discovered my love for coding I started looking for fields in software development that I would enjoy. That was when I found Lambda School, a fully immersive coding bootcamp with a focus in Web Development. It was the perfect way for me to combine both the creative and logical aspects of myself. I found that I enjoyed watching an application go from a simple HTML tag to a fully fledged, beautiful application. </p>
            <p>Throughout the curriculum at Lambda I faced many challenges, I doubted my abilities, I learned, I pushed through, and I applied myself fully to every step of the process. Through every challenge I became a better Developer and a stronger person.</p>
            <p>My greatest strength is my ability to pick things up quickly. My love of researching matches perfectly with this field of work. I enjoy reading documentation and learning what new and cool tricks I can apply to my projects. I enjoy being challenged and having to creatively solve different issues.</p>
        </AboutTextBox>
    </AboutMeBoxWrapper>
  );
}