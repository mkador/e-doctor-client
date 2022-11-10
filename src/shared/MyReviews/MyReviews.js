import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider/AuthProvider'
import useTitle from '../../hooks/useTtile'
import MyReview from './MyReview'

const MyReviews = () => {
  useTitle('my-reviews')
  const { user } = useContext(AuthContext)
  const [myReviews, setmyReviews] = useState([])

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setmyReviews(data))
  }, [user?.email])

  // const handleDelete = (id) => {
  //   setLoading(true)
  //   const proceed = window.confirm('Are You Sure to Delete')
  //   if (proceed) {
  //     fetch(`http://localhost:5000/reviews/${id}`, {
  //       method: 'DELETE',
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data)
  //         setLoading(false)
  //       })
  //   }

  return (
    <div>
      <h2>{myReviews.length}</h2>
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
            {myReviews.map((myReview) => (
              <MyReview key={myReview._id} myReview={myReview}></MyReview>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyReviews
