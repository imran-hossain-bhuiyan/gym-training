import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    const [agree, setAgree] = useState(false);
    return (
        <div style={{height:'60vh'}} className="w-50 container mx-auto">
            <h2 className='text-primary mt-3 text-center'>Register Now</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group  className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setAgree(!agree)} className={agree ? '' : 'text-danger'}  type="checkbox" label="I accept the terms and condtions of GYM FREAK"/>
                </Form.Group>
                <Button disabled={!agree} variant="primary d-block w-50 mx-auto mb-4" type="submit">
                    Register
                </Button>
            </Form>
            <p>Already have an acocunt? <Link className='text-decoration-none text-primary' to={'/login'}>Please Login</Link></p>
        </div>
    );
};

export default Register;