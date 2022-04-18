import React from 'react';
import profilePhoto from '../../images/profile/profile.png';

const AboutMe = () => {
    return (
        <div style={{height: '80vh'}} className='text-center container mx-auto mt-5'>
            <img style={{borderRadius: '50%', width:'200px', height:'200px'}} src={profilePhoto} alt="" />
            <p className='mt-4'>I'm Shariful Islam Arman. I am a student of honour's 2nd year in a College under National University. My goal is to become a MERN stack developer. Also I love problem solving. Coding/Programming is my passion. Hope I can reach my goal.
            </p>
        </div>
    );
};

export default AboutMe;