import React, { Component } from 'react';
import { ContactViewWrap } from '../styles/contact-styles';
import { ButtonForm } from './../styles/buttonStyles';
import { TextField } from '@material-ui/core';

// from contact handleChange={this.handleChange} handleSubmit={this.handleSubmit}

const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap'
    }
}
export default class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state={
          name: '',
          email: '',
          multiline: ''
        }
      }

      handleChange = e => {
          this.setState({
            ...this.state,
            [e.target.name]: e.target.value
          });
      };

      handleSubmit = e => {
        e.preventDefault();
        const req = {
            from_name: this.state.name,
            from_email: this.state.email,
            message: this.state.multiline
        }

        this.props.handleCraftReq(req);
      }

      render() {
          const classes = styles;
          return(
            <ContactViewWrap>
                <h2>Want to work together?</h2>
                <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                    <TextField
                        id="outlined-name"
                        label="What's your name?"
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-email-input"
                        label="Your email address?"
                        type="email"
                        name="email"
                        autoComplete="email"
                        margin="normal"
                        variant="outlined"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <TextField
                        id="outlined-textarea"
                        label="Tell me about your project!"
                        placeholder="Tell me about your project!"
                        name='multiline'
                        multiline
                        margin="normal"
                        variant="outlined"
                        value={this.state.multiline}
                        onChange={this.handleChange}
                    />
                    <ButtonForm type="submit">Send</ButtonForm>
                </form>
            </ContactViewWrap>
          )
      }

}