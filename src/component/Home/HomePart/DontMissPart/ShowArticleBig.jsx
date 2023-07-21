import React from 'react'
import Style from "../../home.module.css";

export default function ShowArticleBig({imgUrl,title,author,date,dec}) {
  let aut = ''
  author? aut = author : author = '';
  return (
    <>
        <div className="col-md-6">
          <div className="d-flex flex-column justify-content-center ">
            <div className="w-100">
              <img src={imgUrl} alt="" className="w-100" />
            </div>
            <div className="w-100 pe-3">
              <p className={`${Style.DontMissTitel} my-3`}>
                {title}
              </p>
            </div>
            <div>
              {
                <p className={`${Style.writeNewswName} mb-4`}>{author}
                  <span className={`${Style.writeNewswdate}`}>{date}</span>
                </p>
              }  
            </div>
            {
              dec?
                <div>
                  <p className={`${Style.writeNewswdate} ${Style.writeNewswText} `}>
                    {dec}
                  </p>
                </div>
              :''
            }
          </div>
        </div>
    </>
  )
}
