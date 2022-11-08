import React from 'react'
import useTitle from '../../../hooks/useTtile'
import Banner from '../Banner/Banner'
import DocTime from '../DocTime'
import DoctorOnline from '../DoctorOnline/DoctorOnline'

const Home = () => {
  useTitle('home')
  return (
    <div>
      <Banner></Banner>
      <DocTime></DocTime>
      <DoctorOnline></DoctorOnline>
    </div>
  )
}

export default Home
