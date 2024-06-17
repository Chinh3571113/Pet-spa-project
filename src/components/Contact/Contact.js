import React from 'react'
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap'
import * as Yup from 'yup';
import { useFormik } from 'formik';

export default function Contact() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      program: 0,
      message: "",
      agree: false
    },
    onSubmit: (values) => {
      console.log(values.email);
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required.").min(2, "Must be 2 characters or more"),
      email: Yup.string().required("Required.").email("Invalid email"),
      phone: Yup.number().integer().typeError("Please enter a valid number"),
      program: Yup.number().integer().typeError("Please select a program."),
      message: Yup.string().required("Required.").min(10, "Must be 10 characters or more"),
      agree: Yup.boolean().oneOf([true], "The terms and conditions must be accepted.")
    }),
  });

  
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Form onSubmit={formik.handleSubmit} >

              <Row className='justify-content-md-center' >
                <Col>
                  <Form.Group className="mb-3" >
                    <Form.Control type="text" placeholder="Name" name='name' value={formik.values.name} onChange={formik.handleChange} />
                  </Form.Group>
                </Col>
                <Col>
                  {formik.errors.name && (<Alert variant="warning">{formik.errors.name}</Alert>)}
                </Col>
              </Row>

              <Form.Group className="mb-3" >
                <Form.Control type="email" placeholder="Email" name='email' value={formik.values.email} onChange={formik.handleChange} />
              </Form.Group>
              {formik.errors.email && (<Alert variant="warning">{formik.errors.email}</Alert>)}

              <Row className='justify-content-md-center' >
                <Form.Group className="mb-3" >
                  <Form.Control type="number" placeholder="Phone" name='phone' value={formik.values.phone} onChange={formik.handleChange} />
                </Form.Group>
                {formik.errors.phone && (<Alert variant="warning">{formik.errors.phone}</Alert>)}
              </Row>


              <Form.Group className="mb-3" >
                <Form.Select aria-label="Default select example" name='program' value={formik.values.program} onChange={formik.handleChange} >
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
              {formik.errors.program && (<Alert variant="warning">{formik.errors.program}</Alert>)}

              <Form.Group className="mb-3" >
                <Form.Control as="textarea" rows={3} name='message' value={formik.values.message} onChange={formik.handleChange} />
              </Form.Group>
              {formik.errors.message && (<Alert variant="warning">{formik.errors.message}</Alert>)}

              <Form.Group className="mb-3" >
                <Form.Check type="switch" label="Switch" name='agree' value={formik.values.agree} onChange={formik.handleChange} />
              </Form.Group>
              {formik.errors.agree && (<Alert variant="warning">{formik.errors.agree}</Alert>)}


              <Button type='submit' >Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}
