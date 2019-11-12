import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { CardWrap } from '../../styles/about-me-styles';
import react from '../../../assets/react.png';
import js from '../../../assets/js.png';
import node from '../../../assets/nodejs.png';
import sql from '../../../assets/sql.png';
import postgres from '../../../assets/postgres.png';
import github from '../../../assets/github-white.png';
import angular from '../../../assets/angular.png';
import ts from '../../../assets/ts.png';
import csharp from '../../../assets/csharp.png';
import mvc from '../../../assets/mvc.jpg';
import vb from '../../../assets/vb.png';
import tfs from '../../../assets/tfs.jpg';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));

const TechStack = () => {
    const techArray = [
        {
            id: '1',
            name: 'ReactJS',
            value: '9/10',
            img: react
        },
        {
            id: '2',
            name: 'JavaScript',
            value: '9/10',
            img: js
        },
        {
            id: '3',
            name: 'NodeJS',
            value: '8.5/10',
            img: node
        },
        {
            id: '4',
            name: 'SQLite3',
            value: '9/10',
            img: sql
        },
        {
            id: '5',
            name: 'PostGres',
            value: '7/10',
            img: postgres
        },
        {
            id: '6',
            name: 'Github',
            value: '9.5/10',
            img: github
        },
        {
            id: '7',
            name: 'Angular',
            value: '6/10',
            img: angular
        },
        {
            id: '8',
            name: 'TypeScript',
            value: '7/10',
            img: ts
        },
        {
            id: '9',
            name: 'C#',
            value: '5/10',
            img: csharp
        },
        {
            id: '10',
            name: 'MVC',
            value: '5/10',
            img: mvc
        },
        {
            id: '11',
            name: 'VB.net',
            value: '5/10',
            img: vb
        },
        {
            id: '12',
            name: 'Team Foundation Server',
            value: '9/10',
            img: tfs
        }
    ]

    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const [data, setData] = React.useState([]);
    const [dataIndex, setDataIndex] = React.useState(6);
    const [prevDataIndex, setPrevDataIndex] = React.useState(0);

    setTimeout(() => {
        setData(techArray.slice(prevDataIndex, dataIndex))
    });

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
        setPrevDataIndex(prev => prev + 6);
        setDataIndex(prev => prev + 6);
    }

    const handleBack = async() => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
        if(prevDataIndex >= 6) {
            setPrevDataIndex(prev => prev - 6);
        }
        if(dataIndex >= 6) {
            setDataIndex(prev => prev - 6);
        }
    }


    return (
        <>
        <Grid container className={classes.root} spacing={2}>
            {data && data.map(el => {
                return(
                    <CardWrap key={el.id}>
                          <img src={el.img} alt={el.name} className="tech-img"/>
                          <h4>{el.name}</h4>
                          <h2>{el.value}</h2>
                      </CardWrap>
                )
            })}
        </Grid>

        <MobileStepper
            variant="dots"
            steps={2}
            position="static"
            activeStep={activeStep}
            className={classes.root}
            nextButton={
                <Button size="small" onClick={handleNext} disabled={activeStep === 1}>
                    Next
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </Button>
            }
            backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                    Back
                </Button>
            }
        />
        </>
    )
}

export default TechStack


{/* // {techArray && techArray.map(el => { */}
{/* //     return (
//         <div key={el.id} className="card">
//             <img src={el.img} alt={el.name} className="tech-img"/>
//             <h4>{el.name}</h4>
//             <p>{el.value}</p>
//         </div>
//     )
// })}

// { */}
//     name: '',
//     value: '',
//     img: ''
// }