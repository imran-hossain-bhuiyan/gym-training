import React from 'react';
import github from '../../../images/socialMediaIcon/github.png';
import facebook from '../../../images/socialMediaIcon/facebook.png';

const Footer = () => {
    return (
        <div className='bg-primary mt-5 text-center d-flex justify-content-around align-items-center text-white'>
            <div style={{height: '20vh', paddingTop:'50px'}} >
            <p><small>All Rights &copy; Reserved By GYM FREAK {new Date().getFullYear()}</small></p>
        </div>
        <div>
            <h5>Follow Me On</h5>
            <button className='btn d-block text-white'><img style={{background: 'transparent'}} height={30} weight={30} src={facebook} alt="" /> <span>Facebook</span></button>
            <button className='btn d-block text-white'><img height={30} weight={30} src={github} alt="" /> <span>Github</span></button>
            
        </div>
        </div>
    );
};

export default Footer;