import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div style={{ height: '80vh',  }}>
            <h3 className="text-center text-primary mt-3 mb-5">Answering The Questions</h3>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Difference between authorization and authentication
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className='d-flex g-4 justify-content-center'>
                            <div >
                                Authentication:
                                <ul>
                                    <li>Authentication verifies who the user is.</li>
                                    <li>Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.</li>
                                    <li>Authentication is the first step of a good identity and access management process.</li>
                                    <li>Authentication is visible to and partially changeable by the user.</li>
                                </ul>
                            </div>

                            <div>
                                Authorization:
                                <ul>
                                    <li>Authorization determines what resources a user can access.</li>
                                    <li>Authorization works through settings that are implemented and maintained by the organization.</li>
                                    <li>Authorization always takes place after authentication.</li>
                                    <li>Authorization isn't visible to or changeable by the user.</li>
                                </ul>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header> Why to use Firebase authentication?What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                   
Firebase Authentication makes it easier to get your users signed-in without having to understand the complexities behind implementing your own authentication system. Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>What other services does firebase provide than authentication?</Accordion.Header>
                    <Accordion.Body>
                    There are many services which Firebase provides execept authentication. These are: 
                    <ul>
                        <li>Cloud Firestore.</li>
                        <li>Cloud Functions.</li>
                        <li>Hosting.</li>
                        <li>Cloud Storage.</li>
                        <li>Google Analytics.</li>
                        <li>Predictions.</li>
                        <li>Cloud Messaging.</li>
                    </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;