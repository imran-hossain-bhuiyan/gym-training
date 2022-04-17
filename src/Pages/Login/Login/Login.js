import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="w-50 container mx-auto">
            <h2 className='text-primary mt-3 text-center'>Please Login</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary d-block w-50 mx-auto mb-4" type="submit">
                    Login
                </Button>
            </Form>
            <p>New To GYM FREAKER? <Link to="/register" className='text-primary pointer text-decoration-none'>Please Register</Link></p>
        </div>
    );
};

export default Login;