import React from "react"
import img from "../images/services.jpg"
import Back from "../common/Back"
import "../home/featured/Featured.css"
// import FeaturedCard from "../home/featured/FeaturedCard"

const Services = () => {
  return (
    <>
      <section className='services mb'>
        <Back name='Services' title='Services -All Services' cover={img} />
        <div className='featured container'>
          {/* <FeaturedCard /> */}
          <h2>UNDER CONSTRUCTION...</h2>
        </div>
      </section>
    </>
  )
}

export default Services
