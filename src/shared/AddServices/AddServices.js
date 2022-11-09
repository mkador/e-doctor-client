import React, { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider/AuthProvider'

const AddServices = () => {
  const { _id, title } = useLoaderData
  const { user } = useContext(AuthContext)

  const handleAddService = (e) => {
    e.preventDefault()
    const form = e.target
    const firstName = form.firstName.value
    const lastName = form.lastName.value
    const phone = form.phone.value
    const email = form.email.value
    const photoURL = form.photoURL.value
    const message = form.message.value

    const addService = {
      service: _id,
      serviceName: title,
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email,
      photoURL: photoURL,
      message: message,
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
            name="firstName"
            type="text"
            placeholder="First Name"
            className="input input-bordered input-success w-full required "
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            className="input input-bordered input-success w-full required "
          />
          <input
            name="phone"
            type="text"
            placeholder="Phone Number"
            className="input input-bordered input-success w-full required "
          />
          <input
            name="photoURL"
            type="text"
            placeholder="photoURL"
            className="input input-bordered input-success w-full required "
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="input input-bordered input-success w-full required "
          />
        </div>
        <div className="text-center">
          <textarea
            name="message"
            className="textarea textarea-success"
            placeholder="Your Message"
          ></textarea>
        </div>
        <div className="text-center">
          <input className="btn" type="submit" value="Add" />
        </div>
      </form>
    </div>
  )
}

export default AddServices
