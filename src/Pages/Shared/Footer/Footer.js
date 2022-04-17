import React from 'react';

const Footer = () => {
    return (
        <div style={{height: '20vh'}} className='bg-primary mt-5 text-center'>
            <p><small className=" text-white">All Rights &copy; Reserved By GYM FREAK {new Date().getFullYear()}</small></p>
        </div>
    );
};

export default Footer;