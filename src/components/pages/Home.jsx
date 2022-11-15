import React from 'react'
import './Home.css'
import SectionOne from './SectionOne'
import SectionThree from './SectionThree'
import SectionTwo from './SectionTwo'
import SectionFour from './SectionFour'

export default function Home() {
  return (
    <div className='homeWrapper'>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
    </div>
  )
}
