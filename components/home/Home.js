import React, { useState } from 'react'
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
import img7 from '../../Images/cooking-blog-3.webp'
import img8 from '../../Images/cooking-blog-2.webp'
import img9 from '../../Images/cooking-blog-1.webp'
import img10 from '../../Images/cleaning-blog-3.webp'
import img11 from '../../Images/cleaning-blog-2.webp'
import img12 from '../../Images/cleaning-blog-1.webp'
import { CiStar } from "react-icons/ci";
import { GiCampCookingPot } from "react-icons/gi";
import { MdCleaningServices } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'



function Home() {

  const [counterOn, setCounterOn] = useState(false);

  return (
    <div>
      {/* video container */}
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
          <div className='section2-cards'>
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
      </div>
      {/* image */}
      <div>
        <img src={img6} alt="all services" className='d-block w-100'/>
      </div>
      {/* rating and customers */}
      <div className='services-rating'>
        <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
          <Stack direction='horizontal'>
              <div className='rating-container text-center'>
                <div className='display-4 fw-bold d-inline'>
                  <CiStar className='display-4 fw-bold'/>
                  {counterOn && <CountUp start={0} end={4.8} duration={2.7} decimals={1} />}
                  <p className='fs-6'>Service Rating</p>
                </div>  
              </div>
              <div className='customer-container text-center'>
                <div className='display-4 fw-bold d-inline'>
                    <IoIosPeople className='display-4 fw-bold'/>
                    {counterOn &&  <CountUp start={0} end={500} duration={2.7} suffix="+" />}
                    <p className='fs-6'>Happy Customers</p>
                </div> 
              </div>
          </Stack>
        </ScrollTrigger>
      </div>
      {/* vertical timeline */}
      <div className='vertical-timeline-component'>
        <VerticalTimeline>
          <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: 'white', color: '#fff', border:'2px solid black' }}
          contentArrowStyle={{ }}
          iconStyle={{ background: '#ffffff', color: '#000000', width: '40px', height:'40px', marginLeft: '-19.5px', marginTop:'14px' }}
          icon={<GiCampCookingPot />}
          date='Cooking for Busy Schedules'
          >
            <Card className="timeline-card">
              <Card.Img src={img7}></Card.Img>
              <Card.Body>
                <Card.Title>Cooking for Busy Schedules</Card.Title>
                <Card.Text>Delicious, healthful, and simple-to-prepare meals are part of our personalised programmes, so you can enjoy them without worrying about grocery shopping or preparation time.</Card.Text>
              </Card.Body>
            </Card>
          </VerticalTimelineElement>
          <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: 'white', color: '#fff', border:'2px solid black' }}
          contentArrowStyle={{ }}
          iconStyle={{ background: '#ffffff', color: '#000000', width: '40px', height:'40px', marginLeft: '-19.5px', marginTop:'14px' }}
          icon={<GiCampCookingPot />}
          date='Cooking for Busy Schedules'
          >
            <Card className="timeline-card">
              <Card.Img src={img8}></Card.Img>
              <Card.Body>
                <Card.Title>Cooking for Special Occasions</Card.Title>
                <Card.Text>We enjoy crafting gastronomic adventures that you and your visitors won't soon forget. We provide tailored meals according to your tastes for everything from small dinners to larger parties.</Card.Text>
              </Card.Body>
            </Card>
          </VerticalTimelineElement>
          <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: 'white', color: '#fff', border:'2px solid black' }}
          contentArrowStyle={{ }}
          iconStyle={{ background: '#ffffff', color: '#000000', width: '40px', height:'40px', marginLeft: '-19.5px', marginTop:'14px' }}
          icon={<GiCampCookingPot />}
          date='Cooking for Busy Schedules'
          >
            <Card className="timeline-card">
              <Card.Img src={img9}></Card.Img>
              <Card.Body>
                <Card.Title>Interactive Cooking Sessions</Card.Title>
                <Card.Text>Optional cooking classes for family members to learn how to prepare healthy and delicious meals together, fostering a love for cooking and making informed food choices.</Card.Text>
              </Card.Body>
            </Card>
          </VerticalTimelineElement>
          <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: 'white', color: '#fff', border:'2px solid black' }}
          contentArrowStyle={{ }}
          iconStyle={{ background: '#ffffff', color: '#000000', width: '40px', height:'40px', marginLeft: '-19.5px', marginTop:'14px' }}
          icon={<MdCleaningServices />}
          date='Cooking for Busy Schedules'
          >
            <Card className="timeline-card">
              <Card.Img src={img10}></Card.Img>
              <Card.Body>
                <Card.Title>Thorough Cleaning</Card.Title>
                <Card.Text>Top-notch equipment is used by our cleaning specialists to create a clean and organised house. We promise that you will be happy.</Card.Text>
              </Card.Body>
            </Card>
          </VerticalTimelineElement>
          <VerticalTimelineElement
          // className='vertical-timeline-element--work'
          contentStyle={{ background: 'white', color: '#fff', border:'2px solid black' }}
          contentArrowStyle={{ }}
          iconStyle={{ background: '#ffffff', color: '#000000', width: '40px', height:'40px', marginLeft: '-19.5px', marginTop:'14px' }}
          icon={<MdCleaningServices />}
          date='Cooking for Busy Schedules'
          >
            <Card className="timeline-card">
              <Card.Img src={img11}></Card.Img>
              <Card.Body>
                <Card.Title>Professional Expertise</Card.Title>
                <Card.Text>Our staff is qualified and equipped to provide high-quality service. You can rely on us to consistently surpass your expectations.</Card.Text>
              </Card.Body>
            </Card>
          </VerticalTimelineElement>
          <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: 'white', color: '#fff', border:'2px solid black' }}
          contentArrowStyle={{ }}
          iconStyle={{ background: '#ffffff', color: '#000000', width: '40px', height:'40px', marginLeft: '-19.5px', marginTop:'14px' }}
          icon={<MdCleaningServices />}
          date='Cooking for Busy Schedules'
          >
            <Card className="timeline-card">
              <Card.Img src={img12}></Card.Img>
              <Card.Body>
                <Card.Title>Customized Plans</Card.Title>
                <Card.Text>We are aware that every family is distinct and every house is unique. For this reason, we provide specialised cleaning programmes to meet your unique needs.</Card.Text>
              </Card.Body>
            </Card>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default Home
