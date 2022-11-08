import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../src/assets/images/logo/logo.png'

const Header = () => {
  return (
    <div className="navbar bg-base-100 pt-4">
      <div className="flex-1">
        <Link to="/">
          <img className="w-20 rounded-full" src={logo} alt="" />
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div>
          <Link to="/login">
            <button className="btn btn-outline btn-info">LogIn</button>
          </Link>
        </div>
        <div>
          <Link to="/signup">
            <button className="btn btn-outline btn-info">Sign Up</button>
          </Link>
        </div>
        <div>
          <Link to="/blog">
            <button className="btn btn-outline btn-info">Blog</button>
          </Link>
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
          />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
