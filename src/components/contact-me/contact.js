import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {ContactWrap, ContactViewWrap, AboutMeWrapper} from '../styles/about-me-styles';
import Nav from './../nav/nav';
import Footer from './../footer/footer';
import TextField from '@material-ui/core/TextField';
import { ButtonForm } from './../styles/buttonStyles';

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: theme.spacing(2),
    },
    menu: {
      width: 200,
    },
  }));

  
  

const Contact = () => {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        name: '',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };
    return (
      <AboutMeWrapper>
        <Nav />
            <ContactWrap>
                <ContactViewWrap>
                    <h2>Want to work together?</h2>
                    <form className={classes.container} noValidate autoComplete="off">
                        <TextField
                            id="outlined-name"
                            label="What's your name?"
                            className={classes.textField}
                            value={values.name}
                            onChange={handleChange('name')}
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-email-input"
                            label="Your email address?"
                            className={classes.textField}
                            type="email"
                            name="email"
                            autoComplete="email"
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-textarea"
                            label="Tell me about your project!"
                            placeholder="Tell me about your project!"
                            multiline
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                        />
                        <ButtonForm>Send</ButtonForm>
                    </form>
                </ContactViewWrap>
            </ContactWrap>
        <Footer />
      </AboutMeWrapper>
    );
  }
  
  export default Contact