import React from 'react'
import './SectionTwo.css'

export default function SectionTwo() {
  return (
    <div className='sectionTwo-wrappper'>
      <div className='sectionTwo-divs'>
        <img src='images/Vector (1).png' alt='img' className='sectionTwo-img' />
        <h2 className='sectionTwo-text'>MBToken</h2>
      </div>
      <div className='sectionTwo-divs'>
        <img src='images/image 66.png' alt='img' className='sectionTwo-img' id='metaMask-img'/>
        <h2 className='sectionTwo-text' id='metaMask-text'>METAMASK</h2>
      </div>
      <div className='sectionTwo-divs'>
        <img src='images/openSea.png' alt='img' className='sectionTwo-img' id='openSea-img' />
        <h2 className='sectionTwo-text'>OpenSea</h2>
      </div>
    </div>
  )
}
