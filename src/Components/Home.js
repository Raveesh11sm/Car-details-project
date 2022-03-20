import React from 'react'
import UserCards from './UserCards'

function Home() {
  return (
    <div>
<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
          </div>
          <div className="carousel-inner" id='carosal'>
            <div className="carousel-item active">
              <img src="https://image.cnbcfm.com/api/v1/image/105940475-1559232349684190164-car-ferrari-sf90-stradale.jpg?v=1559232362&w=929&h=523" className="d-block w-100" alt="bucatti" />
              <div className="carousel-caption d-none d-md-block">
                <h5>All Kinds Of You Dream Cars</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e5/Red_Bugatti_Veyron_on_the_road_%287559997596%29.jpg" className="d-block w-100" alt="ferari" />
              <div className="carousel-caption d-none d-md-block">
               
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://cdn.motor1.com/images/mgl/Y817q/s1/lamborghini-aventador-lp-780-4-ultimae.jpg" className="d-block w-100" alt="Lamborgini" />
              <div className="carousel-caption d-none d-md-block">
              
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
          <UserCards />
        </div>



        
    </div>
  )
}

export default Home