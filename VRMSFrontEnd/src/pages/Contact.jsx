import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../styles/contact.css";
import { toast } from "react-toastify";
import axios from "axios";
import { createUrl, log } from '../utils/utils'


const Contact = () => {

 

    const [name , setName] = useState('');
    const [email, setEmail] = useState('');
    const [message , setMessage] = useState('');
  
    const navigate = useNavigate()
  
    const addFeedBackHandler = (e)=>{
        e.preventDefault()
      if (name.length == '') {
          toast.error('Please enter name')
      }
      else if (email.length == '') {
          toast.error('Please enter email')
      } 
      else if (message.length == '') {
        toast.error('Please enter message')
    } 
      else {
      const addFeedbackObj = { customerName : name,email,feedbackMsg: message}
      console.log(addFeedbackObj);
      
      axios.post(createUrl('/feedback/addFeedback'),addFeedbackObj)
      .then(response => {
         
          console.log('Response data:', response.data);
          toast.success('Feedback added successfully')
          navigate('/')
      })
      .catch(error => {
          toast.error("Feedback can't be added")
          console.error('An error occurred:', error);
          
      });}
    }


  return (
    
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Get In Touch</h6>

              <Form>
                <FormGroup className="contact__form">
                  <Input placeholder="Your Name" type="text" 
                  onChange={(e) => {
                    setName(e.target.value)
                }}
                  />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Email" type="email" 
                  onChange={(e) => {
                    setEmail(e.target.value)
                }}
                  />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    placeholder="Message"
                    className="textarea"

                    onChange={(e) => {
                        setMessage(e.target.value)
                    }}

                  ></textarea>
                </FormGroup>

                <button className=" contact__btn" type="submit" onClick={addFeedBackHandler}>
                  Send Message
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Contact Information</h6>
                <p className="section__description mb-0">
                  Nashik 
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Phone:</h6>
                  <p className="section__description mb-0">+91-7900063022</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">admin@rentonride.com</p>
                </div>

               
             
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;