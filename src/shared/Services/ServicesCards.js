import React from 'react'
import { Link } from 'react-router-dom'

const ServicesCards = ({ service }) => {
  const { _id, img, price, title } = service
  return (
    <div className="mt-5 card w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-xl font-bold">Price: $ {price}</p>
        <div className="card-actions justify-end">
          <Link to={`/checkout/${_id}`}>
            <button className="btn btn-outline btn-success">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ServicesCards
