import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ShowArticleBig from './ShowArticleBig';
import ShowAriticleSmall from './ShowAriticleSmall';
import Loding from '../Loding';

export default function DontMissCategory(categoryFirstComponent1) {
  
  let categoryNameFirst = categoryFirstComponent1.NameOfSectionComponent1;
  const [articlesNewse, setArticlesNewse] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getApi() {
    try {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=${categoryNameFirst}&from=2023-06-20&sortBy=popularity&apiKey=34ea584bfa5048249478c09483d308fc`);
      setArticlesNewse(response.data.articles);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching articles:', error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getApi();
  }, [categoryNameFirst]);

  return (
    <>
      {loading ? (
        <Loding />
      ) : (
        <div className="row">
          {articlesNewse.length > 5 && (
            <ShowArticleBig
              imgUrl={articlesNewse[0].urlToImage}
              title={articlesNewse[0].title}
              author={articlesNewse[0].author}
              date={` - ${articlesNewse[0].publishedAt}`}
              dec={articlesNewse[0].description}
            />
          )}
          <div className="col-md-6">
            <div className="d-flex flex-column justify-content-center">
              {articlesNewse.length > 0 ? (
                articlesNewse.slice(5, 9).map((article, index) => (
                  <ShowAriticleSmall
                    key={index}
                    imgUrl={article.urlToImage}
                    title={article.title}
                    date={article.publishedAt}
                  />
                ))
              ) : (
                <p className='alert alert-warning'>No articles found</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}