import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ServicesCards from './ServicesCards'

const ServicesAll = () => {
  const [allServices, setAllServices] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/allServices')
      .then((res) => res.json())
      .then((data) => setAllServices(data))
  }, [])
  return (
    <div className="text-center mt-6 mb-6 ">
      <div>
        <h2 className="text-5xl font-semibold">All Services</h2>
        <p>
          We believe in prevention rather than treatment. Our health checks help
          you stay on top of your health. Choose the one that is right for you.
        </p>
      </div>

      <div className="grid m-3 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {allServices.map((service) => (
          <ServicesCards key={service._id} service={service}></ServicesCards>
        ))}
      </div>
    </div>
  )
}

export default ServicesAll
