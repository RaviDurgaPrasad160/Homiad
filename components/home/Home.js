import React from 'react'
import './Home.css'
import Video2 from "../../Videos/cleaning-vid.webm"
import Video1 from "../../Videos/cooking-vid.webm"
import {Carousel, Stack, Button, Card} from 'react-bootstrap'
import img1 from '../../Images/car-1.webp'
import img2 from '../../Images/car-2.webp'
import img3 from '../../Images/car-3.webp'


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
      <div className='section2'>
        <h1 className='section2-heading'>WHAT WE OFFER?</h1>
        <div className='section2-container'>
          <div className='custom-card'>
            {/* <img src="" alt="cooking" /> */}
            <Card>
              <Card.Body>
                <Card.Title className='fs-2 fw-bold text-center'>Cooking</Card.Title>
                <Card.Text className='text-center'>Welcome to the world of flavour, innovation and endless possibilities in kitchen.</Card.Text>
                <Button>Book Now</Button>
              </Card.Body>
            </Card>
          </div>
          <div className='custom-card'>
            {/* <img src="" alt="cleaning" /> */}
            <Card>
              <Card.Body>
                <Card.Title className='fs-2 fw-bold text-center'>Cleaning</Card.Title>
                <Card.Text className='text-center'>We believe in transforming the chore of cleaning into a delightful and efficient experience.</Card.Text>
                <Button>Book Now</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
