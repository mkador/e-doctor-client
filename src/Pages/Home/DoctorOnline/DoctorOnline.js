import React from 'react'
import pic5 from '../../../assets/images/Banner/pic-5.jpg'

const DoctorOnline = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="w-1/2 ml-4">
          <h1 className="text-5xl font-bold  text-white">
            CONSULT WITH DOCTOR
          </h1>
          <h4 className="text-3xl mt-5 text-white">
            Instant aduio-video call from anywhere, anytime
          </h4>
          <p className="py-6">
            Realtime consultation facility searches verified doctors who are
            currently online. Doctors will have access your medical records,
            ongoing medications and will prescribe you digitally.
          </p>

          <button className="btn btn-primary">Call Now</button>
        </div>
        <div className="w-1/2">
          <img src={pic5} className=" rounded-lg shadow-2xl" alt="" />
        </div>
      </div>
    </div>
  )
}

export default DoctorOnline
