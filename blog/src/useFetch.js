import { useEffect,useState } from "react";

const useFetch=(url)=>{

        const [data,setData]=useState(null);
        const [isPending,setIsPending]=useState(true);
        const [error,setError]=useState(null);

    useEffect(()=>{
        const abortCont= new AbortController();
    setTimeout(()=>{
        fetch(url,{signal: abortCont.signal})
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
            if(err.name == 'AbortError')
            {
                console.log('fetch aborted');
            }
            else{
            setError(err.message);
    
            setIsPending(false);
            }
        })
        
    },3000);

    return ()=> abortCont.abort();     
    
},[url]);
    return {data,isPending,error};
}

export default useFetch;
