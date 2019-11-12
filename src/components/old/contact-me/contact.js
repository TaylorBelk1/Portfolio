import React, {Component} from 'react';
import {ContactWrap, ContactWrapper} from '../styles/contact-styles';
import Nav from './../nav/nav';
import Footer from './../footer/footer';
import ContactForm from './contact-form';
import Submitted from './form-submitted';
import CircularProgress from '@material-ui/core/CircularProgress';

export default class Contact extends Component {
    constructor() {
      super();
      this.state={
        formSubmitted: false,
        isLoading: false
      }
    }

    handleCraftReq = req => {
        this.setState({...this.state, formSubmitted: true, isLoading: true});
        this.handleSubmit(req);
    };

    handleSubmit = req => {
      const template = process.env.REACT_APP_EMAILSJS_TEMPLATEID;
      const userId = process.env.REACT_APP_EMAILJS_USERID;
      const params = req;

      window.emailjs.send('default_service', template, params, userId)
        .then(res => {
          this.setState({...this.state, isLoading: false})
          console.log(res);
        }).catch(e => {
          this.setState({...this.state, isLoading: false})
          console.log(e)
        });
    }

    render() {
      return (
        <ContactWrapper>
          <Nav />
              <ContactWrap>
                  {this.state.isLoading ?
                    <CircularProgress className='load'/> :
                    this.state.formSubmitted ?
                    <Submitted /> :
                    <ContactForm handleCraftReq={this.handleCraftReq} />
                  }
              </ContactWrap>
            <Footer />
        </ContactWrapper>
      );
    }
  }
