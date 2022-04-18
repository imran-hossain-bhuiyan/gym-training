import React from 'react';
import { Carousel } from 'react-bootstrap';
import photo1 from '../../../images/banner/photo1.png'
import photo2 from '../../../images/banner/photo2.jpg'
import photo3 from '../../../images/banner/photo3.jpg'
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner'>
            <Carousel>
        <Carousel.Item>
          <img height={500} width={500}
            className="d-block w-100"
            src={photo1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Build Your Muscle</h3>
            <p>Build your muscle here within 14 weeks</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img height={500} width={500}
            className="d-block w-100"
            src={photo2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Weight Lose</h3>
            <p>Lose your extra weight. Start this journey with me.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img height={500} width={500}
            className="d-block w-100"
            src={photo3}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Build Your Strenght</h3>
            <p>
              Increse your strength. To start this journey buy this service.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        </div>
    );
};

export default Banner;