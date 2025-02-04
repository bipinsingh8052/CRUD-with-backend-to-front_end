
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Display from './Display';
import Insert from './Insert';
export default function Home() {
  return (
    <>
    <Carousel>
      <Carousel.Item>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1pb-qVaXaLJyJJAWV6jsx1yHQ-0iZS_PzAg&s" alt=""   style={{width:"100%", height:"400px"}}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1.jpeg" alt=""   style={{width:"100%", height:"400px"}}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmwla6vUQK67X5KHksARyVrL4Evo509hBcCA&s" alt="" style={{width:"100%", height:"400px"}} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


<hr />
<br /><br /><br />
<Display/>
<br /><br /><br /><br /><br /><br />


<Insert/>


</>
  )
}
