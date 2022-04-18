import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    
    const { id, name, img, price, description } = service;
    const navigate = useNavigate();
    const navigateToDetail = id => {
        navigate(`/service/${id}`)
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
                        <Button onClick={() => navigateToDetail(id)} variant="primary">Buy this</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default Service;