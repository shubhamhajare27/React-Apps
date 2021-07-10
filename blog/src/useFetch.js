import { useEffect,useState } from "react";

const useFetch=(url)=>{

        const [data,setData]=useState(null);
        const [isPending,setIsPending]=useState(true);
        const [error,setError]=useState(null);

    useEffect(()=>{
    fetch(url)
    .then(res =>{
        if(res.ok)
        {
        res.json()
        .then(data =>{
            console.log(data)
            setError(null);

            setData(data);
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
    
    
},[url ]);
    return {data,isPending,error};
}

export default useFetch;
