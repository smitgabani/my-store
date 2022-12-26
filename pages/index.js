import React from 'react'
import { Products, Footer, HeroBanner, FooterBanner} from "../components"
import {client} from '../lib/client';

const Home = () => {
  return (
    <div>
      <HeroBanner/>
      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Best speakers for you.</p>
      </div>
      <div>


      </div>
      <FooterBanner/>
    </div>
  )
}

export default Home