import React from 'react'
import Video2 from "../../Videos/cleaning-vid.webm"
import Video1 from "../../Videos/cooking-vid.webm"

function Home() {
  return (
    <div>
      <div className='video-container'>
      <video src={Video1} className='w-100 m-0' autoPlay muted loop></video>
      <video src={Video2} className='w-100 m-0' autoPlay muted loop></video>
      </div>
    </div>
  )
}

export default Home
