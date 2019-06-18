import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {ContactWrap, ContactViewWrap, ContactWrapper} from '../styles/contact-styles';
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
    const [emailInput, setEmailInput] = React.useState({
      email: ''
    });
    const [values, setValues] = React.useState({
        name: '',
        multiline: ''
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    const handleEmail = name => event => {
      setEmailInput({ ...emailInput, [name]: event.target.value })
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(emailInput.email)
      console.log(values.name)
      console.log(values.multiline)
      // console.log(process.env.REACT_APP_EMAILSJS_TEMPLATEID)
      const template = process.env.REACT_APP_EMAILSJS_TEMPLATEID;
      const userId = process.env.REACT_APP_EMAILJS_USERID;
      const params = {
        from_name: values.name,
        from_email: emailInput.email,
        message: values.multiline
      };

      window.emailjs.send('default_service', template, params, userId)
        .then(res => {
          console.log(res);
        })
    }


    return (
      <ContactWrapper>
        <Nav />
            <ContactWrap>
                <ContactViewWrap>
                    <h2>Want to work together?</h2>
                    <form className={classes.container} noValidate autoComplete="off" onSubmit={handleSubmit}>
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
                            value={emailInput.email}
                            onChange={handleEmail('email')}
                        />
                        <TextField
                            id="outlined-textarea"
                            label="Tell me about your project!"
                            placeholder="Tell me about your project!"
                            multiline
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            value={values.multiline}
                            onChange={handleChange('multiline')}
                        />
                        <ButtonForm type="submit">Send</ButtonForm>
                    </form>
                </ContactViewWrap>
            </ContactWrap>
          <Footer />
      </ContactWrapper>
    );
  }

  export default Contact