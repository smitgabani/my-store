import Link from 'next/link'
import React from 'react'

const HeroBanner = () => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className="beats-solo">Small Text</p>
        <h3>Mid text</h3>
        <img src="" alt="headphones" className='hero-banner-image' />
        <div>
          <Link href="/product/ID">
            <button>Button text</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner