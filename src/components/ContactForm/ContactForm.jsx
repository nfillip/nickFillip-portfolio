import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import {Link, useLocation} from 'react-router-dom';
import linkedin from "../../assets/icons/linkedin.png"

import {validateEmail} from '../../utils/validators'
import '../NavTab/NavBar.css'

function ContactForm() {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('');
    const [textField, setTextField] = useState('')
    const [errorMessage, setErrorMessage] = useState('');
    const handleClose = () => {
        setShow(false);
    }
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
        } else if (!validateEmail(inputValue) && inputValue === ""){
            setErrorMessage(null)
        }else {
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
          handleClose();
          Swal.fire({
            title: "Success",
            text: "EMAIL SENT!",
            icon: "success",
          });
          setEmail('')
      }, (error) => {
          console.log(error.text);
          handleClose();
      });
    
  };


  return (
    <>
    <div onKeyDown={e => e.stopPropagation()}
    onClick={e => e.stopPropagation()}
    onFocus={e => e.stopPropagation()}
    onMouseOver={e => e.stopPropagation()}>

    
      <div onClick={handleShow} className = "modalLink navItem">
       Contact-Me
      </div>

      <Modal show={show} onHide={handleClose} id = "override-contact">
        <Modal.Header closeButton>
          <Modal.Title>Email Me!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form ref = {form} onSubmit = {sendEmail}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label >Email address</Form.Label>
              {errorMessage ? ( <Form.Control
                type="email"
                placeholder="name@example.com"
                value = {email}
                onChange = {handleInputChange}
                className = "errorBorder"
                name = "user_email"
              />) : ( <Form.Control
                type="email"
                placeholder="name@example.com"
                value = {email}
                onChange = {handleInputChange}
                name = "user_email"
              />)}
            {errorMessage && (<p className = "errorMessage">{errorMessage}</p>)}
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control name = "message" as="textarea" rows={3} type = "text" onChange = {handleInputChange} />
            </Form.Group>
          </Form>

        </Modal.Body>
        <Modal.Footer>
          <a target = "_blank" href = "https://www.linkedin.com/in/nicholas-fillip/"><Image className = "linkedIn" src = {linkedin}></Image></a>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          {errorMessage || email === "" ? (<Button disabled variant="primary" onClick={!errorMessage && sendEmail} className = " submitButtonEmail">
            Send Email
          </Button>) : (<Button variant="primary" onClick={!errorMessage && sendEmail} className = "submitButtonEmail">
            Send Email
          </Button>)}



        </Modal.Footer>
      </Modal>
    </div>
    </>
  );
}

export default ContactForm;
