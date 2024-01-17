import React from 'react'
import Form from 'react-bootstrap/Form';

const ContactCom = () => {
  return (
    <div className='container mt-4 mb-5 shadow'>
<Form>
      <Form.Group className="m-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Contact No.</Form.Label>
        <Form.Control type="email" placeholder="Contact no." />
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Question</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <button type="submit" className="btn btn-primary mb-3">submit</button>
    </Form>
    </div>
    )}
    

export default ContactCom;