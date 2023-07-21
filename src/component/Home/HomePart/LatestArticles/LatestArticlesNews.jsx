import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loding from '../Loding';
import ShowArticleBig from '../DontMissPart/ShowArticleBig';


export default function LatestArticlesNews(NameOfSectionComponent) {
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
          articlesNewse.length > 8 && (
            <>
              <div className='row'>
                {articlesNewse.length > 0 ? (
                      articlesNewse.slice(10, 18).map((article, index) => (
                        <>
                                <ShowArticleBig 
                                  key={index}
                                  imgUrl={article.urlToImage}
                                  title={article.title}
                                  author={article.author}
                                  date={` - ${article.publishedAt}`}
                                />
                        </>
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

