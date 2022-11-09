import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Service = () => {
  const {
    _id,
    img,
    description,
    age,
    price,
    rating,
    Diagnostics,
    Consultation,
    title,
    Taka,
  } = useLoaderData()
  return (
    <div>
      <div>
        <h1 className="text-5xl text-orange-700 text-center mt-5 mb-5">
          Service section
        </h1>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img alt="" src={img} className="w-1/2 rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-orange-400 text-2xl text-bold">{title}</h1>
              <div>
                <h4 className="text-orange-400 text-bold">Consultation: </h4>
                <p className="text-white">{Consultation}</p>
              </div>
              <p className="text-white py-6">{description}</p>
              <div>
                <h4 className="text-orange-400 text-bold">Diagnostics:</h4>
                <p className="text-white py-6">{Diagnostics}</p>
              </div>

              <div className="mr-0 text-center card-actions justify-end">
                <div className="badge badge-outline text-xl text-bold bg-orange-700  p-3">
                  Price: {Taka}
                </div>
                <div className="badge badge-outline text-xl text-bold bg-orange-700  p-3">
                  Rating: {rating}
                </div>
                <div>
                  <button className="btn btn-outline btn-success">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-5xl text-orange-700 text-center mt-5 mb-5">
        Review section
      </h1>
    </div>
  )
}

export default Service
