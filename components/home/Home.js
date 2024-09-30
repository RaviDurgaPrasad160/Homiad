import React from 'react'
import './Home.css'
import Video2 from "../../Videos/cleaning-vid.webm"
import Video1 from "../../Videos/cooking-vid.webm"
import {Carousel, Stack, Button, Card} from 'react-bootstrap'
import img1 from '../../Images/car-1.webp'
import img2 from '../../Images/car-2.webp'
import img3 from '../../Images/car-3.webp'
import { IoMdStar } from "react-icons/io";
import img4 from '../../Images/alternative-service-cleaning.webp'
import img5 from '../../Images/alternative-service-cooking.webp'
import img6 from '../../Images/why-choose-us.webp'



function Home() {
  return (
    <div>
      <div className='video-container'>
        <div className='videos'>
          <video src={Video1} className='d-block w-100' autoPlay muted loop></video>
        </div>
        <div className='videos'>
          <video src={Video2} className='d-block w-100' autoPlay muted loop></video>
        </div>
     </div>
       {/* Section1----------------------------- */}
     <div className='section1'>
      <Stack direction='horizontal'>
        <div className="section1-content p-3">
          <h1 className='section1-heading'>About Homaid</h1>
          <p className="section1-para lead text-dark">At Homaid, we are not just a cleaning service, we are your partners in creating a home that sparkles with brilliance. Yet, our passion extends to the heart of the home the kitchen, where we strive to revolutionize the way you experience not just cleanliness and organization but a culinary journey filled with delights and flavors.</p>
          <a href="/contactus">
          <Button className='getInTouch'>Get in Touch</Button>
          </a>
        </div>
        <div className="carousel">
          <Carousel controls={false} indicators={false}>
            <Carousel.Item>
              <img src={img1} alt="img" className='w-100 carImg rounded-3'/>
            </Carousel.Item>
            <Carousel.Item>
              <img src={img2} alt="img" className='w-100 carImg rounded-3'/>
            </Carousel.Item>
            <Carousel.Item>
              <img src={img3} alt="img" className='w-100 carImg rounded-3'/>
            </Carousel.Item>
          </Carousel>
        </div>
        </Stack>
      </div>
      {/* Section2----------------------------- */}
      <div className='section2'>
        <h1 className='section2-heading text-center pt-5 p-3'>WHAT WE OFFER?</h1>
        <div className='section2-container pb-5'>
          <Stack direction='horizontal hstack1'>
          <div className='custom-card1'>
            <Card>
              <Card.Img variant='top' src={img5}/>
              <Card.Body>
                <Card.Title className='fs-2 fw-bold text-center'>Cooking</Card.Title>
                <Card.Text className='text-center'>Welcome to the world of flavour, innovation and endless possibilities in kitchen.</Card.Text>
                <Card.Text className='fw-bold text-center p-0'><IoMdStar className='text-warning p-0 fs-3'/> 4.8 (2.1k+)</Card.Text>
                <Button className='d-block mx-auto'>Book Now</Button>
              </Card.Body>
            </Card>
          </div>
          <div className='custom-card2'>
            <Card>
              <Card.Img variant='top' src={img4} />
              <Card.Body>
                <Card.Title className='fs-2 fw-bold text-center'>Cleaning</Card.Title>
                <Card.Text className='text-center pb-0'>We believe in transforming the chore of cleaning into a delightful and efficient experience.</Card.Text>
                <Card.Text className='fw-bold text-center p-0'><IoMdStar className='text-warning p-0 fs-3'/> 4.8 (2.1k+)</Card.Text>
                <Button className='d-block mx-auto'>Book Now</Button>
              </Card.Body>
            </Card>
          </div>
          </Stack>
        </div>
      </div>
      <div>
        <img src={img6} alt="all services" className='d-block w-100'/>
      </div>
    </div>
  )
}

export default Home
