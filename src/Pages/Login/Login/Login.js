import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaGoogle, FaGithub } from 'react-icons/fa'
import login1 from '../../../../src/assets/images/login/login1.png'
import { AuthContext } from '../../../context/AuthProvider/AuthProvider'
import { GoogleAuthProvider } from 'firebase/auth'
import useTitle from '../../../hooks/useTtile'

const Login = () => {
  useTitle('login')
  const { login } = useContext(AuthContext)
  const { googlePopUp } = useContext(AuthContext)
  const googleProvider = new GoogleAuthProvider()
  const handleWithLogin = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    form.reset()
    login(email, password)
      .then((result) => {
        const user = result.user
        console.log(user)
      })
      .catch((error) => console.error(error))
  }
  const handleGooglePopUp = () => {
    googlePopUp(googleProvider)
      .then((result) => {
        const user = result.user
      })
      .catch((error) => console.error(error))
  }
  return (
    <div className="hero w-full my-5">
      <div className="hero-content flex-col lg:flex-row grid md:grid-cols-2">
        <div className="gap-20 text-center lg:text-left">
          <img className="w-full" src={login1} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleWithLogin} className="card-body">
            <h1 className="text-center text-3xl font-semibold">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
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
                className="input input-bordered"
              />
              <label className="label">
                <Link href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="login" />
            </div>
            <button
              onClick={handleGooglePopUp}
              className="btn btn-outline btn-success"
            >
              {' '}
              <FaGoogle className="mr-2 text-orange-600 text-2xl"></FaGoogle>{' '}
              Google
            </button>
          </form>
          <p className="text-center">
            New to e-Doctor?{' '}
            <Link className="text-green-600 font-bold" to="/signup">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
