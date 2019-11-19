import React, {useState} from 'react';
import {
    ModalWrap,
    ModalContentWrap,
    HeaderWrap,
    FormWrap,
    InputWrap,
    InputField,
    TextArea,
    Button
} from './Styles/ContactModal-Styles';
import close from '../assets/close.png';
import CircularProgress from '@material-ui/core/CircularProgress';
import ErrorMessage from './Error-Message';
import FormSuccess from './FormSuccess';

const ContactModal = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [multiline, setMultiline] = useState('');
    const [formSent, setFormSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [wasError, setWasError] = useState(false);

    console.log(props)

    const handleSubmit = e => {
        e.preventDefault();
        const req = {
            from_name: name,
            from_email: email,
            message: multiline
        }

        setIsLoading(true);
        sendEmail(req);
    }

    const sendEmail = req => {
        const template = process.env.REACT_APP_EMAILSJS_TEMPLATEID;
        const userId = process.env.REACT_APP_EMAILJS_USERID;
        const params = req;

        window.emailjs.send('default_service', template, params, userId)
          .then(res => {
            setIsLoading(false);
            setFormSent(true);
            console.log(res);
          }).catch(e => {
            setIsLoading(false);
            setWasError(true);
            console.log(e)
          });
      }

    return (
        <ModalWrap>
            <ModalContentWrap>
                    <HeaderWrap>
                        <h4>Contact Me</h4>
                        <img id='close' src={close} alt='close icon' onClick={props.handleClose} />
                    </HeaderWrap>
                    {isLoading ?
                        <CircularProgress className='loading' />
                        : wasError ?
                        <ErrorMessage />
                        : formSent ? <FormSuccess />
                        : <>
                        <FormWrap noValidate autoComplete="off" onSubmit={handleSubmit}>
                            <InputWrap>
                                <InputField
                                    type='text'
                                    name='name'
                                    placeholder='Name'
                                    value={name || ''}
                                    onChange={e => setName(e.target.value)}
                                />
                                <InputField
                                    type='email'
                                    name='email'
                                    placeholder='Email'
                                    value={email || ''}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </InputWrap>
                            <TextArea
                                type='text'
                                name='multiline'
                                placeholder='Tell me about your project'
                                value={multiline || ''}
                                onChange={e => setMultiline(e.target.value)}
                            />

                            <Button>Send</Button>
                        </FormWrap>
                    </>
                    }
            </ModalContentWrap>
        </ModalWrap>
    )
}

export default ContactModal