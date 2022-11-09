import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ServicesCards from './ServicesCards'

const Services = () => {
  const [services, setServices] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then((res) => res.json())
      .then((data) => setServices(data))
  }, [])
  return (
    <div className="text-center mt-6 mb-6 ">
      <div>
        <h2 className="text-5xl font-semibold">Services</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour,
          <br /> randomised words which don't look even slightly believable.{' '}
        </p>
      </div>

      <div className="grid m-3 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServicesCards key={service._id} service={service}></ServicesCards>
        ))}
      </div>
      <Link to="/allServices">
        <button className="btn btn-outline btn-success mt-5 mb-5">
          See All
        </button>
      </Link>
    </div>
  )
}

export default Services
