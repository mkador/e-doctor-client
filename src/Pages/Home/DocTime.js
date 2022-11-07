import React from 'react'
import pic4 from '../../../src/assets/images/Banner/pic-4.jpg'

const DocTime = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="w-1/2">
          <img src={pic4} className=" rounded-lg shadow-2xl" alt="" />
        </div>
        <div className="w-1/2 ml-4">
          <h1 className="text-5xl font-bold">When to use e-Doctor!</h1>
          <h4 className="text-2xl mt-5">Common health issue</h4>
          <p className="py-6">
            Ask anything you would normally ask your GP. You can have an instant
            video with one of our GPs via a digital consultation from anywhere,
            at any time of day.
          </p>
          <h4 className="text-2xl">Specialist advice</h4>
          <p className="py-6">
            Sometimes it’s helpful to see a specialist when you want. For
            gynaecology, child specialists, dermatology, cardiology,
            gastroenterology, nutrition,chronic diseases such as hypertension,
            or other conditions, DocTime can help you to connect with the right
            specialist doctor and to stay healthy. More than 20 different
            specialities are available on e-Doctor
          </p>
          <h4 className="text-2xl">Mental health and wellbeing</h4>
          <p className="py-6">
            In a fast paced world, it is important to monitor and protect your
            mental health and wellbeing. Doctors can help you stay healthy
            whether you have symptoms at home or in your workplace of stress,
            smoking, anxiety, bereavement or depression.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default DocTime
