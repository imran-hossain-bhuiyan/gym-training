import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ServiceDetail.css';

const ServiceDetail = () => {
    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('servicesData.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);
    const {serviceId} = useParams(); 
 
return (
        <div style={{height:'60vh'}}>
             <h2 className="text-center mt-5">Here is your service detail.</h2>
             <div>
                 {
                     services.map(service => <div><p>Name: {service.name}</p> <p>Price: {service.price}</p></div>)
                 }
             </div>
            <div className="text-center mt-5">
            <Link to={'/checkout'}>
                <button className='btn btn-primary'>Proceed CheckOut</button>
            </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;