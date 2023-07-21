import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Style from './Footer.module.css'
import Loding from '../Home/HomePart/Loding';
import FooterShowAriticleSmall from './FooterShowAriticleSmall';
import LogoImg from './np12blue-white-retina.webp'


export default function FooterPart() {

    const [articlesNewseOne, setArticlesNewseOne] = useState([]);
    const [articlesNewseTwo, setArticlesNewseTwo] = useState([]);
    const [loadingOne, setLoadingOne] = useState(true);
    const [loadingTwo, setLoadingTwo] = useState(true);

    async function getApiOne() {
        try {
            await axios.get(`https://newsapi.org/v2/everything?q=edito&from=2023-06-20&sortBy=popularity&apiKey=34ea584bfa5048249478c09483d308fc`)
                .then((res) => {
                    setArticlesNewseOne(res.data.articles);
                })
                .then(() => {
                    setLoadingOne(false);
                })
        } catch (error) {
            console.error('Error fetching articles:', error);
            setLoadingOne(false);
        }
    }

    async function getApiTwo() {
        try {
            await axios.get(`https://newsapi.org/v2/everything?q=POPULAR&from=2023-06-20&sortBy=popularity&apiKey=34ea584bfa5048249478c09483d308fc`)
                .then((res) => {
                    setArticlesNewseTwo(res.data.articles);
                })
                .then(() => {
                    setLoadingTwo(false);
                })
        } catch (error) {
            console.error('Error fetching articles:', error);
            setLoadingTwo(false);
        }
    }

    useEffect(() => {
        getApiOne();
        getApiTwo();
    }, []);

    return (
        (loadingOne && loadingTwo) ? (
            <Loding />
        ) : (<>
            <div className={Style.footerBG}>
                <div className='container'>
                    <div className='row pt-5'>
                        <div className='col-md-4'>
                            <div className='w-100 d-flex flex-column text-start'>
                                <div className={Style.footerTitelSection}>
                                    <p className='text-uppercase text-white mb-4'>EDITOR PICKS</p>
                                </div>
                                {articlesNewseOne.length > 0 ? (
                                    articlesNewseOne.slice(0, 3).map((ele, index) => {
                                        return (
                                            <FooterShowAriticleSmall
                                                key={index}
                                                imgUrl={ele.urlToImage}
                                                title={ele.title}
                                                date={ele.publishedAt}
                                            />
                                        )
                                    })
                                ) : (
                                    <p>No articles found</p>
                                )}
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='w-100 d-flex flex-column text-start'>
                                <div className={Style.footerTitelSection}>
                                    <p className='text-uppercase text-white mb-4'>POPULAR POSTS</p>
                                </div>
                                {articlesNewseTwo.length > 0 ? (
                                    articlesNewseTwo.slice(0, 3).map((ele, index) => {
                                        return (
                                            <FooterShowAriticleSmall
                                                key={index}
                                                imgUrl={ele.urlToImage}
                                                title={ele.title}
                                                date={ele.publishedAt}
                                            />
                                        )
                                    })
                                ) : (
                                    <p>No articles found</p>
                                )}
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='w-100 d-flex flex-column text-start'>
                                <div className={Style.footerTitelSection}>
                                    <p className='text-uppercase text-white mb-4'>POPULAR CATEGORY</p>
                                </div>
                                <div className='d-flex flex-column w-100'>
                                    <div className={`d-flex justify-content-between w-100 `}>
                                        <p className={`text-white ${Style.footerHover}`}>Racing</p>
                                        <p className={`text-white ${Style.footerHover}`}>20</p>
                                    </div>
                                    <div className={`d-flex justify-content-between w-100 `}>
                                        <p className={`text-white ${Style.footerHover}`}>Travel</p>
                                        <p className={`text-white ${Style.footerHover}`}>15</p>
                                    </div>
                                    <div className={`d-flex justify-content-between w-100 `}>
                                        <p className={`text-white ${Style.footerHover}`}>Interiors</p>
                                        <p className={`text-white ${Style.footerHover}`}>15</p>
                                    </div>
                                    <div className={`d-flex justify-content-between w-100 `}>
                                        <p className={`text-white ${Style.footerHover}`}>Architecture</p>
                                        <p className={`text-white ${Style.footerHover}`}>15</p>
                                    </div>
                                    <div className={`d-flex justify-content-between w-100 `}>
                                        <p className={`text-white ${Style.footerHover}`}>Make it Modern</p>
                                        <p className={`text-white ${Style.footerHover}`}>15</p>
                                    </div>
                                    <div className={`d-flex justify-content-between w-100 `}>
                                        <p className={`text-white ${Style.footerHover}`}>Decorating</p>
                                        <p className={`text-white ${Style.footerHover}`}>15</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className={`w-75 m-auto ${Style.hrColor}`} />
                    <div className='row mt-4'>
                        <div className='col-3'>
                            <div className='w-100 py-4'>
                                <img src={LogoImg} alt="Logo Img" className="w-100" />
                            </div>
                        </div>
                        <div className='col-5'>
                            <div className='ps-2 d-flex flex-column text-white'>
                                <p className={`pt-3 pb-2 ${Style.footerTitel}`}>ABOUT US</p>
                                <p className='pb-2'>
                                    Newspaper is your news, entertainment, music fashion website.
                                    We provide you with the latest breaking news and videos straight from the entertainment industry.
                                </p>
                                <p className='m-0'>Contact us : <span><a href="mailto:contact@yoursite.com">contact@yoursite.com</a></span></p>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='ps-2 d-flex flex-column text-white'>
                                <p className={`pt-3 pb-2 ${Style.footerTitel}`}>FOLLOW US</p>
                                <div className='d-flex'>
                                    <i class="fa-brands fa-square-facebook"></i>
                                    <i class="fa-brands fa-square-twitter"></i>
                                    <i class="fa-brands fa-square-youtube"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-black '>
                        <div className='d-flex justify-content-between align-items-center container'>
                            <div>
                                <p className='text-white m-0 ps-3'>© Newspaper WordPress Theme by TagDiv</p>
                            </div>
                            <div>
                                <nav className="navbar navbar-expand-lg text-white">
                                    <div className="container-fluid">
                                        <div className="collapse navbar-collapse" id="navbarNav">
                                            <ul className="navbar-nav">
                                                <li className="nav-item">
                                                    <a className={`nav-link active text-white ${Style.footerHover}`} aria-current="page" href="#">Disclaimer</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className={`nav-link text-white ${Style.footerHover}`} href="#">Privacy</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className={`nav-link text-white ${Style.footerHover}`} href="#">Advertisement</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className={`nav-link text-white ${Style.footerHover}`}>Contact us</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
            </div>
        </>)
    )
}
