import React from 'react'
import './Home.css'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'

export default function Home() {
  return (
    <div className='homeWrapper'>
        <SectionOne />
        <SectionTwo />
    </div>
  )
}
