import React from 'react'
import pic1 from '../../../assets/images/Banner/pic-1.jpg'
import pic2 from '../../../assets/images/Banner/pic-2.jpg'
import pic3 from '../../../assets/images/Banner/pic-3.jpg'
import './Banner.css'
import BannerItem from './BannerItem'

const bannerData = [
  {
    image: pic1,
    prev: 3,
    id: 1,
    next: 2,
  },
  {
    image: pic2,
    prev: 1,
    id: 2,
    next: 3,
  },
  {
    image: pic3,
    prev: 2,
    id: 3,
    next: 1,
  },
]

const Banner = () => {
  return (
    <div className="carousel w-full mt-6 mb-6">
      {bannerData.map((slideItem) => (
        <BannerItem key={slideItem.id} slideItem={slideItem}></BannerItem>
      ))}
    </div>
  )
}

export default Banner
