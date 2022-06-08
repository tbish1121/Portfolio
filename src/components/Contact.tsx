import './css-files/Contact.css'
import {Form, Button} from 'react-bootstrap';
import { Icon } from '@iconify/react';

const Contact = () => {
    return (
        <div className="contact d-flex flex-column align-items-center mt-5">
            <h3 className="text-align-center">Contact Me!</h3>
            <Form className="w-25">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Email" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" placeholder="Message" rows={3} />
                </Form.Group>

                <Button className="float-end" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            
            <div className="socials d-flex flex-column justify-content-between mt-5">
                <div className="d-flex justify-content-center">
                    <h5>Links:</h5>    
                </div>

                <div className="mt-2">
                    <button className="social-link-button">
                        <Icon className="mx-2" icon="fa:github-square" width="40" height="40" /> 
                    </button>

                    <button className="social-link-button">
                        <Icon className="mx-2" icon="logos:linkedin-icon" width="40" height="40" />
                    </button>
                    
                </div>
                    
            </div>
        </div>
    )
}

export default Contact;