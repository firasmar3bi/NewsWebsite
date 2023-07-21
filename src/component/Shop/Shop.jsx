import React from 'react'
import HeaderBG from '../HeaderBG/HeaderBG'
import NewsApi from './ShopPart/NewsApi'
import Footer from '../Footer/Footer'

export default function Shop() {
  return (
    <>
      <HeaderBG titel='FASHION' />  
        <div className='w-75 m-auto'>
          <NewsApi />
        </div>
      <Footer />
    </>
  )
}
