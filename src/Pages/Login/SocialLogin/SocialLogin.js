import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import google from '../../../images/socialMediaIcon/google.png';
import github from '../../../images/socialMediaIcon/github.png';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();


    if(loading || loading1){
        return <Loading></Loading>
    }

    let errorMessage;
    if (error || error1) {
        errorMessage = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>

    }

    if (user || user1) {
        navigate('/home');
    }

    return (
        <div >
            <div className='d-flex align-items-center '>
                <div style={{ height: '1px' }} className='w-50 bg-primary'>

                </div>
                <p className='mt-3 px-4'>OR</p>
                <div style={{ height: '1px' }} className='w-50 bg-primary'>
                </div>
            </div>
            {errorMessage}
            <div className=''>
            <button onClick={() => signInWithGoogle()} className='btn btn-primary mt-3 d-block w-50 mx-auto'>
                    <img style={{ width: '30px', height: '30px', background: 'white' }} src={google} alt="" /><span className='px-2'>Continue With Google</span> </button>

                <button onClick={() => signInWithGithub()} className='btn btn-primary mt-3 d-block w-50 mx-auto'>
                    <img style={{ width: '30px', height: '30px',  }} src={github} alt="" /><span className='px-2'>Continue With GitHub</span> </button>

            </div>
        </div>
    );
};

export default SocialLogin;