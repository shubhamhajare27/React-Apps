import { useState,useEffect } from "react";
import BlogList from "./blogsList";
const Home = () => {

const [blogs,setblogs]=useState(null);
const [isPending,setIsPending]=useState(true);
const [error,setError]=useState(null);

useEffect(()=>{
  fetch('http://localhost:8000/blogs')
  .then(res =>{
    if(res.ok)
    {
      res.json()
       .then(data =>{
         console.log(data)
         setError(null);

         setblogs(data);
         setIsPending(false);
      })
    }
    else{
      throw Error('failed');
    }
  })
  .catch(err=>{
    setError(err.message);

    setIsPending(false);
  })
  
},[ ]);

    return ( 
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <h2>Loading...</h2>}
      {blogs && < BlogList blogs={blogs} title="All Blogs" />}
    </div> );
}
 
export default Home;