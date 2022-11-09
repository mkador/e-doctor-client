import React, { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider/AuthProvider'

const AddServices = () => {
  const { _id, title } = useLoaderData
  const { user } = useContext(AuthContext)

  const handleAddService = (e) => {
    e.preventDefault()
    const form = e.target
    const img = form.img.value
    const title = form.title.value
    const rating = form.rating.value
    const price = form.price.value
    const description = form.description.value

    const addService = {
      img,
      title,
      description,
      rating,
      price,
    }

    fetch('http://localhost:5000/allServices', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(addService),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.acknowledged) {
          alert('Added Service')
          form.reset()
        }
      })
      .catch((error) => console.error(error))
  }

  return (
    <div>
      <h2>{title}</h2>
      <form onSubmit={handleAddService}>
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 p-6 gap-4">
          <input
            name="img"
            type="text"
            placeholder="img URL"
            className="input input-bordered input-success w-full required "
          />
          <input
            name="title"
            type="text"
            placeholder="title"
            className="input input-bordered input-success w-full required "
          />
          <input
            name="rating"
            type="text"
            placeholder="rating"
            className="input input-bordered input-success w-full required "
          />

          <input
            name="price"
            type="text"
            placeholder="price"
            className="input input-bordered input-success w-full required "
          />
        </div>
        <div className="text-center">
          <textarea
            name="description"
            className="textarea textarea-success"
            placeholder="description"
          ></textarea>
        </div>
        <div className="text-center">
          <input className="btn" type="submit" value="Add Service" />
        </div>
      </form>
    </div>
  )
}

export default AddServices
