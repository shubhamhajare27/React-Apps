import { useState,useEffect } from "react";
import BlogList from "./blogsList";
const Home = () => {

const [blogs,setblogs]=useState(null);
const [isPending,setIsPending]=useState(true);

useEffect(()=>{
  fetch('http://localhost:8000/blogs')
  .then(res =>{
    res.json()
      .then(data =>{
        console.log(data)
        setblogs(data);
        setIsPending(false);
      })
  })
  
},[ ]);

    return ( 
    <div className="home">
      {isPending && <h2>Loading...</h2>}
      {blogs && < BlogList blogs={blogs} title="All Blogs" />}
    </div> );
}
 
export default Home;