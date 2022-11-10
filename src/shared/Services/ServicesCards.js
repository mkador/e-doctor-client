import React from 'react'
import { Link } from 'react-router-dom'
import { PhotoProvider, PhotoView } from 'react-photo-view'

const ServicesCards = ({ service }) => {
  const { _id, img, price, title, rating, description } = service
  return (
    <div className="mt-5 card w-96 bg-base-100 shadow-xl image-full">
      <div className="card-body">
        <div>
          <figure>
            <img src={img} alt="" />
          </figure>
        </div>
        <h3 className="text-3xl text-warning">{title}</h3>
        {description?.length > 100 ? (
          <p> {description.slice(0, 100) + '...'} </p>
        ) : (
          <p>{description}</p>
        )}
        <Link to={`/services/${_id}`}>
          <button className="btn btn-link">View Details</button>
        </Link>{' '}
        <br />
        <div className="mr-0 text-center card-actions justify-end">
          <div className="badge badge-outline text-bold bg-orange-700  p-3">
            Price: {price}
          </div>
          <div className="badge badge-outline text-bold bg-orange-700  p-3">
            Rating: {rating}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesCards
