import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (error) {
        return <p>Erorr: {error.message}</p>
    };

    if (loading || sending) {
        return <Loading />
    }

    if (user) {
        navigate(from, { replace: true });
    };

    const resetPassword = async () => {
        if (email) {
          await sendPasswordResetEmail(email);
          toast('Sent Email')
        }
        else{
          toast("Please enter your email address")
        }
      }


    const handleSignIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password)
    };

    return (
        <div className="w-50 container mx-auto">
            <h2 className='text-primary mt-3 text-center'>Please Login</h2>
            <Form  onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onBlur={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onBlur={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary d-block w-50 mx-auto mb-4" type="submit">
                    Login
                </Button>
            </Form>
            <p>New To GYM FREAKER? <Link to="/register" className='text-primary pointer text-decoration-none'>Please Register</Link></p>
            <p>Forgot Password? <button onClick={resetPassword} className='text-decoration-none text-primary btn btn-link'>Reset Password</button></p>
            <SocialLogin />
            <ToastContainer />
        </div>
    );
};

export default Login;