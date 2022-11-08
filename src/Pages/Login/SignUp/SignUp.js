import React from 'react'
import { Link } from 'react-router-dom'
import signup1 from '../../../../src/assets/images/login/signup1.png'

const SignUp = () => {
  return (
    <div className="hero w-full my-5">
      <div className="hero-content flex-col lg:flex-row grid md:grid-cols-2">
        <div className="ml-24 gap-20 text-center lg:text-left">
          <img className=" w-full" src={signup1} alt="" />
        </div>
        <div className="card flex-shrink-0 w-3/4  shadow-2xl bg-base-100">
          <form className="card-body">
            <h1 className="text-white text-center text-3xl font-semibold">
              Sign Up!
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="Your Email"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <p className="text-center">
            Already have an Account?{' '}
            <Link className="text-green-600 font-bold" to="/login">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignUp
