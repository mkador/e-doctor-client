import React, { useContext, useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider/AuthProvider'
import Review from './Review'

const Service = () => {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(false)
  const { user } = useContext(AuthContext)
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

  const handleAddReviews = (e) => {
    setLoading(true)
    e.preventDefault()
    const form = e.target
    const description = form.description.value

    const addReviews = {
      service_id: _id,
      service_name: title,
      description,
      email: user?.email,
      name: user?.displayName,
      photoURL: user?.photoURL,
    }

    fetch('http://localhost:5000/reviews', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(addReviews),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert('Added reviews')
          setLoading(false)
          form.reset()
        }
      })
      .catch((error) => console.error(error))
  }

  useEffect(() => {
    fetch('http://localhost:5000/reviews')
      .then((res) => res.json())
      .then((data) => setReviews(data))
  }, [loading])

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
              {Diagnostics && (
                <div>
                  <h4 className="text-orange-400 text-bold">Diagnostics:</h4>
                  <p className="text-white py-6">{Diagnostics}</p>
                </div>
              )}

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
      <div>
        <h1 className="text-5xl text-orange-700 text-center mt-5 mb-5">
          Review section
        </h1>
        <div className="ml-20 mt-6 w-3/4 mb-6 ">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Image</th>
                <th>Email</th>
                <th>Comments</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => (
                <Review key={_id} review={review}></Review>
              ))}
            </tbody>
          </table>
        </div>
        {user?.email ? (
          <div>
            <form onSubmit={handleAddReviews}>
              <div className="text-center">
                <textarea
                  name="description"
                  className="textarea textarea-success"
                  placeholder="Comments Here.."
                ></textarea>
              </div>
              <div className="text-center mt-4">
                <input className="btn" type="submit" value="Add Review" />
              </div>
            </form>
          </div>
        ) : (
          <p className="text-center">
            <small className="text-white mr-3">
              You are not Login, If You want to review ? Please Login First
            </small>
            <Link className="text-green-700 text-bold text-xl" to="/login">
              Login
            </Link>
          </p>
        )}
      </div>
    </div>
  )
}

export default Service
