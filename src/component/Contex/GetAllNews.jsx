// import {createContext} from 'react'
// import axios from 'axios'
// import React, { useState } from 'react'

// export const GetAllNews = createContext(null)

// export function GetAllNewsProvider({children} ){
//     const [articlesNewse, setArticlesNewse] = useState([]);
//     const [newArray , setNewArray] = useState([])
//     const [loding , setLoding] = useState(true);
//     async function getApi(category) {
//         try{  
//             await axios.get(`https://newsapi.org/v2/everything?q=${category}&from=2023-06-23&sortBy=popularity&apiKey=9d73861e546549ec9c0772af3ede5aab`)
//             .then((res)=>{
//                 setArticlesNewse(res.data.articles)
//                 setNewArray(res.data.articles.slice(0,4))
//             })
//             .then (()=>{
//                 setLoding(false)
//             })
//             .then (()=>{
//                 console.log(articlesNewse);
//                 // return newArray ,articlesNewse ,loding ;
//             })
//         }catch(error) {
//             console.log(error);
//         }
//     }
//     return <GetAllNews.Provider value={{getApi}}>
//         {children}
//     </GetAllNews.Provider>
// }