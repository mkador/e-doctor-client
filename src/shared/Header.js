import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../src/assets/images/logo/logo.png'
import { AuthContext } from '../context/AuthProvider/AuthProvider'
import { FaUser } from 'react-icons/fa'

const Header = () => {
  const { user, logOut } = useContext(AuthContext)
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error))
  }
  return (
    <div className="navbar bg-base-100 pt-4">
      <div className="flex-1">
        <Link to="/">
          <img className="w-20 rounded-full" src={logo} alt="" />
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
          />
        </div>

        {user?.photoURL ? (
          <div>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="" src={user?.photoURL} />) :
              </div>
            </label>
          </div>
        ) : (
          <FaUser></FaUser>
        )}

        <div className="flex gap-2">
          <button className="text-warning text-bold">{user?.email}</button>

          {user?.uid ? (
            <div className="flex gap-3">
              <div>
                <Link>
                  <button
                    onClick={handleLogOut}
                    className="btn btn-outline btn-info	"
                    to=""
                  >
                    Log Out
                  </button>
                </Link>
              </div>

              <div>
                <Link to="/addServices">
                  <button className="btn btn-outline btn-info">
                    Add Service
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <div>
              <Link to="/login">
                <button className="btn btn-outline btn-info">LogIn</button>
              </Link>
            </div>
          )}
        </div>
        <div>
          <Link to="/myReviews">
            <button className="btn btn-outline btn-info">My Reviews</button>
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
      </div>
    </div>
  )
}

export default Header
