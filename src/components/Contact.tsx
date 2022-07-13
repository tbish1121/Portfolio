import './css-files/Contact.css'
import {Form, Button} from 'react-bootstrap';
import { Icon } from '@iconify/react';
import {useState, useRef} from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const templateId: any = process.env.REACT_APP_TEMPLATE;
    const serviceId: any = process.env.REACT_APP_SERVICE;
    const publicKey: any = process.env.REACT_APP_PUBLICKEY;

    const sendEmail = (e: any) => {
        e.preventDefault();
        const template = {
            from_name: name,
            email: email,
            message: message
        }

        emailjs.send(serviceId, templateId, template, publicKey)
            .then((res) => {
                alert("Email sent")
            })
        
    }


    return (
        <div className="contact d-flex flex-column align-items-center mt-5 pt-5">
            <h3 className="fs-3 text-align-center">Contact Me!</h3>
            <Form className="w-25">
                <Form.Group className="mb-3">
                    <Form.Control onChange={(e) => {setName(e.target.value)}} type="textarea" placeholder="Name" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control onChange={(e) => {setEmail(e.target.value)}} type="textarea" placeholder="Email" />
                </Form.Group>
                
                <Form.Group className="mb-3">
                    <Form.Control onChange={(e) => {setMessage(e.target.value)}} as="textarea" placeholder="Message" rows={3} />
                </Form.Group>

                <Button onClick={sendEmail} className="float-end" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            
            <div className="socials d-flex flex-column justify-content-between mt-5">
                <div className="d-flex justify-content-center">
                    <h5>Links:</h5>    
                </div>

                <div className="mt-2">
                    <a href="https://github.com/tbish1121" target="_blank">
                        <button className="social-link-button">
                            <Icon className="mx-2" icon="fa:github-square" width="40" height="40" /> 
                        </button>
                    </a>

                    <a href="https://www.linkedin.com/in/taylor-bish-8a9200212/" target="_blank">
                        <button className="social-link-button">
                            <Icon className="mx-2" icon="logos:linkedin-icon" width="40" height="40" />
                        </button>
                    </a>
                    
                </div>
                    
            </div>
        </div>
    )
}

export default Contact;