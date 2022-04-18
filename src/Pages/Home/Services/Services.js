import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('servicesData.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);

    return (
        <div >
            <h1 className='text-center mt-5 text-primary' >My Services</h1>
            <div className='text-center' >
                <Row md={3} xs={1} className='g-4 container mt-5 mx-auto'>
                {
                    services.map(service => <Service 
                        key={service.id}
                        service={service}></Service>)
                }
                </Row>
            </div>
        </div>
    );
};

export default Services;