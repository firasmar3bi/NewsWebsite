import React from 'react'
import Style from './HeaderBG.module.css'
export default function HeaderBG({titel}) {
  return (
    <>
        <div className={`${Style.header} d-flex align-items-center`}>
            <div className='w-75 m-auto'>
            <h2 className='text-black text-uppercase text-white'>
               {titel}
            </h2>
            <span className='text-uppercase text-white'>
              Custom category description. You must learn one thing.
              The world was made to be free in.
              Give up all the other worlds Except the one in which you belong.
            </span>    
            </div>
        </div>
    </>
  )
}
