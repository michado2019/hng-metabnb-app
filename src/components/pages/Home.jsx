import React from 'react'
import './Home.css'
import SectionOne from './SectionOne'
import SectionThree from './SectionThree'
import SectionTwo from './SectionTwo'

export default function Home() {
  return (
    <div className='homeWrapper'>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
    </div>
  )
}
