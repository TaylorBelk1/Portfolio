import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AboutMeViewWrap } from '../styles/about-me-styles';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TechStack from './pages/techstack';
import About from './pages/about-details';

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
  });

const AboutMeView = () => {
    const classes = useStyles();
    const [value, setValue] = useState('about');

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(value);
    }

    

    return (
        <AboutMeViewWrap>
            <Paper className={classes.root}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="About Me" value='about' />
                    <Tab label="Tech" value="tech" />
                </Tabs>
            </Paper>
            {value === 'about' ? <About /> : <TechStack />}
        </AboutMeViewWrap>
    )
}

export default AboutMeView