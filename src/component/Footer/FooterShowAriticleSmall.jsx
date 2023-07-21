import React from 'react'
import Style from "../Home/home.module.css";


export default function FooterShowAriticleSmall({imgUrl,title,date}) {
  return (
    <>
        <div className="d-flex mb-4 align-items-center ">
            <div className={`${Style.widthImg}`}>
            <img src={imgUrl} alt="" className={`${Style.widthImg}`} />
            </div>
            <div className=" ms-3">
              <p className={`${Style.sideNewse} my-0 text-white ${Style.footerHover}`}>
              {title}
              </p>
              <span className={`${Style.writeNewswdate}`}>{date}</span>
            </div>
        </div>
    </>
  )
}


    
