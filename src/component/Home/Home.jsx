import React from 'react'
import ApiNewse from './HomePart/ApiNewse'
import HomeDontMiss from './HomePart/DontMissPart/HomeDontMiss'
import Footer from '../Footer/Footer'

export default function Home() {

  return (
    <>
    <div className='container'>
      <ApiNewse />
      <HomeDontMiss />
    </div>
      <Footer />
    </>
  )
}
