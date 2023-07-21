import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Style from "../home.module.css";
import Loding from './Loding';

export default function ApiNewse() {

    // const [articlesNewse, setArticlesNewse] = useState([]);
    const [newArray , setNewArray] = useState([])
    const [loding , setLoding] = useState(true);
    async function getApi() {
        await axios.get('https://newsapi.org/v2/everything?q=general&from=2023-06-23&sortBy=popularity&apiKey=34ea584bfa5048249478c09483d308fc')
        .then((res)=>{
            // setArticlesNewse(res.data.articles)
            setNewArray(res.data.articles.slice(0,4))
        })
        .then (()=>{
            setLoding(false)
        })
    }

    useEffect(() => {
        getApi()
    },[])

        return (
            loding?
            <Loding />
            :<>
                <div className="container mx-5 overflow-hidden">
                    <div className='mb-4'>
                        <span className={`bg-black ${Style.homeHeaderCategoryName}`}>
                            Trending Now
                        </span> 
                        <span className={`ms-3 ${Style.titelText}`} >
                            Another Big Apartment Project Slated for Broad Ripple Company
                        </span>
                      
                    </div>
                    <div className={`row w-100`}>
                        {<>
                        <div className={`col-md-6 position-relative p-0 overflow-hidden ${Style.homeHeaderColHover}`}>
                            <img src={newArray[0].urlToImage} alt="This is a img2" className={`w-100 h-100 ${Style.homeHeaderImgHover}`} />
                            <div className={`position-absolute bottom-0 text-white ${Style.homeHeaderText}`}>
                                <span className={`bg-black ${Style.homeHeaderCategoryName}`}>
                                    {newArray[0].source.name}
                                </span>
                                <h2 className={`${Style.h2Header}`}>
                                {newArray[0].title}
                                </h2>
                                <p className={`${Style.homeHeaderWriteName}`}>{newArray[0].author}
                                    <span className={`${Style.homeHeaderDate}`}>- {newArray[0].publishedAt}</span></p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={`row ${Style.homeCusMargin}`}>
                                <div className="col-12">
                                    <div className={`row ${Style.heigthSlide}`}>
                                        <div className={`col-md-12 position-relative p-0 overflow-hidden h-100 w-100 ${Style.homeHeaderColHover}`}>
                                            <img src={newArray[1].urlToImage} alt="This is a img2" className={`w-100 h-100 ${Style.homeHeaderImgHover}`} />
                                            <div className={`position-absolute bottom-0 text-white ${Style.homeHeaderText}`}>
                                                <span className={`bg-black ${Style.homeHeaderCategoryName}`}>
                                                {newArray[1].source.name}
                                                </span>
                                                <h2 className={`${Style.h2Header}`}>
                                                {newArray[1].title}
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className={`row p-0 w-100 ${Style.heigthSlide1}`}>
                                        <div className={`col-md-6 position-relative p-0 overflow-hidden h-100 ${Style.homeHeaderColHover}`}>
                                            <div className={`${Style.homeCusM1} h-100`}>
                                                <img src={newArray[2].urlToImage} alt="This is a img2" className={`w-100 h-100 ${Style.homeHeaderImgHover}`} />
                                                <div className={`position-absolute bottom-0 text-white ${Style.homeHeaderText}`}>
                                                    <span className={`bg-black ${Style.homeHeaderCategoryName}`}>
                                                    {newArray[2].source.name}
                                                    </span>
                                                    <h2 className={`${Style.h2HeaderSmoleSlide}`}>
                                                    {newArray[2].title}
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`col-md-6 position-relative p-0 overflow-hidden ${Style.homeHeaderColHover} h-100`}>
                                            <div className={`${Style.homeCusM2} h-100`}>
                                                <img src={newArray[3].urlToImage} alt="This is a img2" className={`w-100 h-100 ${Style.homeHeaderImgHover}`} />
                                                <div className={`position-absolute bottom-0 text-white ${Style.homeHeaderText}`}>
                                                    <span className={`bg-black ${Style.homeHeaderCategoryName}`}>
                                                    {newArray[3].source.name}
                                                    </span>
                                                    <h2 className={`${Style.h2HeaderSmoleSlide}`}>
                                                    {newArray[3].title}
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>}
                    </div>
                </div>
            </>
        )
    }


