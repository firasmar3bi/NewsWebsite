// import { useState } from 'react'
// import axios from 'axios'

// export default async function GitApiFunc() {
    
//     const [articlesNewse, setArticlesNewse] = useState([]);
//     const [newArray , setNewArray] = useState([])
//     const [loding , setLoding] = useState(true);

//     await axios.get(`https://newsapi.org/v2/everything?q=health&from=2023-06-23&sortBy=popularity&apiKey=9d73861e546549ec9c0772af3ede5aab`)
//     .then((res)=>{
//         setArticlesNewse(res.data.articles)
//         setNewArray(res.data.articles.slice(0,4))
//     })
//     .then (()=>{
//         setLoding(false)
//     })
//     .then (()=>{
//         console.log('teest');
//         // return newArray ,articlesNewse ,loding ;
//     })
//     return (
//         <>
//             This is a p 
//         </>
//     )
// }

