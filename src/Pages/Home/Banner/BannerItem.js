import React from 'react'

const BannerItem = ({ slideItem }) => {
  const { image, id, next, prev } = slideItem
  return (
    <div id={`slideItem${id}`} className="carousel-item relative w-full">
      <div className="carousel-image">
        <img src={image} className="w-full" alt="" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4">
        <h1 className="text-6xl font-bold">Complete Health Solution</h1>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-48 w-2/5  top-1/2">
        <p className="text-2xl font-semibold text-center">
          Consulting a healthcare professional, buying medicine, ordering lab
          tests and improving your health and wellbeing with e-Doctor, <br />
          All can be done 24/7 with e-Doctor
        </p>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 w-2/5  top-3/4">
        <button className="btn btn-outline btn-warning mr-5">Warning</button>
        <button className="btn btn-outline btn-warning">Warning</button>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href={`#slideItem${prev}`} className="btn btn-circle">
          ❮
        </a>
        <a href={`#slideItem${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  )
}

export default BannerItem