import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footerWrapper'>
        <div className='footerGrid-layout'>
          <div className='footerFlex-one'>
            <div className='footerflex-one_1'>
            <img src='images/Vector (6).png' alt='footerLogo' className='footerLogo' />
            <h2 className='footerLogo-text'>Metabnb</h2>
            </div>
            <div className='footerflex-one_2'>
            <img src='images/Vector (7).png' alt='footerIcon' className='footerSocial-img' />
            <img src='images/Vector (8).png' alt='footerIcon' className='footerSocial-img' id='vector8'/>
            <img src='images/Vector (9).png' alt='footerIcon' className='footerSocial-img' />
            </div>
            <div className='footerCopyright'>
                <p>© 2021 Metabnb</p>
            </div>
          </div>
          <div className='footerFlex-two'>
            <h2 className='footerSub-titles'>Community</h2>
            <p>NFT</p>
            <p>Tokens</p>
            <p>Landlords</p>
            <p>Discord</p>
          </div>
          <div className='footerFlex-two'>
            <h2 className='footerSub-titles'>Places</h2>
            <p>Castles</p>
            <p>Farms</p>
            <p>Beach</p>
            <p>Learn more</p>
          </div>
          <div className='footerFlex-two'>
            <h2 className='footerSub-titles'>About us</h2>
            <p>Road map</p>
            <p>Creators</p>
            <p>Career</p>
            <p>Contact us</p>
          </div>
        </div>
    </div>
  )
}
