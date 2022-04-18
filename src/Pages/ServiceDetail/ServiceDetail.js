import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ServiceDetail.css';

const ServiceDetail = () => {
    const {serviceId} = useParams()
 
return (
        <>
             <h2>Welcome to detail page no {serviceId}</h2>
            <div className="text-center">
            <Link to={'/checkout'}>
                <button className='btn btn-primary'>Proceed CheckOut</button>
            </Link>
            </div>
        </>
    );
};

export default ServiceDetail;