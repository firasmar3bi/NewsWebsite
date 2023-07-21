import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loding from '../Loding';
import Style from "../../home.module.css";


export default function PerformanceTrainingNews(NameOfSectionComponent) {
    let categoryNamesecend = NameOfSectionComponent.NameOfSectionComponent;
    const [articlesNewse, setArticlesNewse] = useState([]);
    const [loading, setLoading] = useState(true);
  
    async function getApi() {
      try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${categoryNamesecend}&from=2023-06-20&sortBy=popularity&apiKey=34ea584bfa5048249478c09483d308fc`);
        setArticlesNewse(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching articles:', error);
        setLoading(false);
      }
    }
  
    useEffect(() => {
      getApi();
    }, [categoryNamesecend]);
  
    return (
      <>
        {loading ? (
          <Loding />
        ) : (
          articlesNewse.length > 4 && (
            <>
              <div className='row'>
                {articlesNewse.length > 0 ? (
                      articlesNewse.slice(10, 14).map((article, index) => (
                        <div className='row'>
                            <div className='col-md-4'>
                                <div className='w-100'>
                                    <img src={article.urlToImage} alt={article.description} className='w-100' />
                                </div>
                            </div>
                            <div className='col-md-8'>
                                    <div className='d-flex flex-column'>
                                    <div>
                                        <p className={`${Style.DontMissTitel} mt-0 mb-3`}>
                                            {article.title}
                                        </p>
                                    </div>
                                    <div>
                                        <p className={`${Style.writeNewswName} mb-3`}>{article.author}
                                            <span className={`${Style.writeNewswdate}`}> - {article.publishedAt}</span>
                                        </p>
                                    </div>
                                    <div>
                                        <p className={`${Style.writeNewswdate} ${Style.writeNewswText} mb-4 `}>
                                            {article.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div> 
                      ))
                    ) : (
                      <p>No articles found</p>
                    )}
                </div>
              </>              
          )

        )}
      </>
    );
}

