import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {Link, useLocation} from 'react-router-dom';

import {validateEmail} from '../../utils/validators'
import '../NavTab/NavBar.css'
function ContactForm() {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('');
    const [textField, setTextField] = useState('')
    const [errorMessage, setErrorMessage] = useState('');
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



  const handleInputChange = async (e) => {
    const {target} = e;
    const inputType = target.type;
    const inputValue = target.value;
    console.log(inputValue)
    if(inputType === 'email') {
        await setEmail(inputValue)
        if(!validateEmail(inputValue) && inputValue!== "") {
            setErrorMessage('Email is invalid')
            return;
        } else {
            setErrorMessage(null)
        }
    }
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pcc7jic', 'template_nqclcz3', form.current, 'Xm4beIlnwMEMpCG2t')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    handleClose();
  };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if(!validateEmail(email) ||inputValue) {
//         setErrorMessage('Email is invalid')
//         return;
//     }
//   }
  return (
    <>
      <Link variant="primary" onClick={handleShow} className = "modalLink navItem">
       Contact-Me
      </Link>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Email Me!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form ref = {form} onSubmit = {sendEmail}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                value = {email}
                onChange = {handleInputChange}
                className = "errorBox"
              />
            {errorMessage && (<p className = "errorMessage">{errorMessage}</p>)}
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} type = "text" onChange = {handleInputChange} />
            </Form.Group>
          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {errorMessage ? (<Button disabled variant="primary" onClick={!errorMessage && sendEmail}>
            Save Changes
          </Button>) : (<Button variant="primary" onClick={!errorMessage && sendEmail}>
            Save Changes
          </Button>)}

        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ContactForm;
