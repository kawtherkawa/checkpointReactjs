import React from 'react'
import { Carousel } from 'react-bootstrap'
import pic from './cover.jpg';
import pic1 from './Lhtml.png';
import pic2 from './Rea.png';
import './skills.css';



const Skills = () => {
  return (
    <div className='container1'>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 pic"
          src={pic}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 pic"
          src={pic1}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 pic"
          src={pic2}
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
  )
}

export default Skills