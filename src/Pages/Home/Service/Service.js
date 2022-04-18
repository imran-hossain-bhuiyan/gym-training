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
                <Card className='card-style ' style={{ width: '20rem', height:'28rem', position:'relative' }}>
                    <Card.Img variant="top" height={200} src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>Price: {price}/month</Card.Text>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Button onClick={() => navigateToDetail(id)} variant="primary" style={{position: 'absolute', bottom:"5px", right:'30%'}}>Buy this</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default Service;