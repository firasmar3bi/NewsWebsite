import ShowArticleBig from '../DontMissPart/ShowArticleBig';
import ShowAriticleSmall from '../DontMissPart/ShowAriticleSmall';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loding from '../Loding';

export default function LifestyleNews(NameOfSectionComponent) {
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
          <div className="row">
            {articlesNewse.length > 5 && (
              <>
              {articlesNewse.length > 0 ? (
                    articlesNewse.slice(10, 12).map((article, index) => (
                      <ShowArticleBig
                        key={index}
                        imgUrl={article.urlToImage}
                        title={article.title}
                        author={article.author}
                        date={` - ${article.publishedAt}`}
                        dec={article.description}
                      />
                    ))
                  ) : (
                    <p>No articles found</p>
                  )}
              </>              
            )}
            <div className='row'>
              <div className='col-md-6'>
                <div className="d-flex flex-column justify-content-center">
                  {articlesNewse.length > 0 ? (
                    articlesNewse.slice(0, 2).map((article, index) => (
                      <ShowAriticleSmall
                        key={index}
                        imgUrl={article.urlToImage}
                        title={article.title}
                        date={article.publishedAt}
                      />
                    ))
                  ) : (
                    <p>No articles found</p>
                  )}
                </div>
              </div>
              <div className='col-md-6'>
                <div className="d-flex flex-column justify-content-center">
                  {articlesNewse.length > 0 ? (
                    articlesNewse.slice(2, 4).map((article, index) => (
                      <ShowAriticleSmall
                        key={index}
                        imgUrl={article.urlToImage}
                        title={article.title}
                        date={article.publishedAt}
                      />
                    ))
                  ) : (
                    <p>No articles found</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
}

