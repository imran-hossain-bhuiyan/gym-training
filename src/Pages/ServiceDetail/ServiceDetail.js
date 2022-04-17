import React from 'react';
import { Card, Button, Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import './ServiceDetail.css';

const ServiceDetail = ({ service }) => {
    const { id, name, img, price, description } = service;
    const navigate = useNavigate();
    const handleCheckOut = id => {
        navigate('/checkout')
    }
    return (
        <>
            <Col>
                <Card className='card-style' style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>Price: {price}/month</Card.Text>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Button onClick={() => handleCheckOut(id)} variant="primary">Proceed CheckOut</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default ServiceDetail;