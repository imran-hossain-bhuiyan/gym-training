import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
// import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate()
    const [agree, setAgree] = useState(false);
  
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    } 

    console.log((email, password));
    //handle confirm password
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
    }

    if (error) {
        return <p>Error: {error.message}</p>
    }

    if (loading) {
        return <Loading></Loading>
    }

    if(user){
        navigate('/')
    }

    // on submit
    const handleCreateUser = (e) =>{
        e.preventDefault();
       

        createUserWithEmailAndPassword(email, password)
    }

    return (
        <div style={{ height: '60vh' }} className="w-50 container mx-auto">
            <h2 className='text-primary mt-3 text-center'>Register Now</h2>
            <Form onSubmit={handleCreateUser}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onBlur={handleConfirmPasswordBlur} type="password" placeholder="Confirm Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setAgree(!agree)} className={agree ? '' : 'text-danger'} type="checkbox" label="I accept the terms and condtions of GYM FREAK" />
                </Form.Group>
                <p className="text-danger">{error}</p>
                <Button disabled={!agree} variant="primary d-block w-50 mx-auto mb-4" type="submit">
                    Sign Up
                </Button>
            </Form>
            <p>Already have an acocunt? <Link className='text-decoration-none text-primary' to={'/login'}>Please Login</Link></p>
        </div>
    );
};

export default Register;