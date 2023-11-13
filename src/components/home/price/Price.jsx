import React from "react"
import Heading from "../../common/Heading"
import "./price.css"
import PriceCard from "./PriceCard"

const Price = () => {
  return (
    <>
      <section className='price padding'>
        <div className='container'>
          <Heading title='Select Your Package' subtitle='SIMPLE PRICING! NO HIDDEN CHARGES' />
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Price