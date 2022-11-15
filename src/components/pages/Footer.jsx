import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footerWrapper'>
        <div className='footerGrid-layout'>
          <div className='footerFlex-one'>
            <div className='footerflex-one_1'>
            <img src='images/Vector (6).png' alt='footerLogo' className='footerLogo' />
            <h2>Metabnb</h2>
            </div>
            <div className='footerflex-one_2'>
            <img src='images/Vector (7).png' alt='footerIcon' className='footerSocial-img' />
            <img src='images/Vector (8).png' alt='footerIcon' className='footerSocial-img' />
            <img src='images/Vector (9).png' alt='footerIcon' className='footerSocial-img' />
            </div>
            <div className='footerCopyright'>
                <p>© 2021 Metabnb</p>
            </div>
          </div>
        </div>
    </div>
  )
}
