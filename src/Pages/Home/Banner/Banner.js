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
          <img height={550} width={500}
            className="d-block w-100"
            src={photo1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img height={550} width={500}
            className="d-block w-100"
            src={photo2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img height={550} width={500}
            className="d-block w-100"
            src={photo3}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        </div>
    );
};

export default Banner;