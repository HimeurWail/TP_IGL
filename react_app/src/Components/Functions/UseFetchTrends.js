import { useEffect , useState } from "react";

const useFetch = (url) => 
{
     const [ trends , setTrends] = useState(null); 
     const [ isPending , setisPending] = useState(true) ; 
     const [ error , seterror] = useState(null) ; 
   
     const useeffectfunction = () =>
     {
      const abortCont = new AbortController() ; 
        fetch(url , {signal : abortCont.signal}) 
          .then(res =>
           { if(!res.ok)
            {
                throw Error('could not fetch trends from that ressource') ; 
            }
             return res.json() ;
          }) 
         .then(trends=>{
            setTrends(trends) ; 
            setisPending(false) ;
            seterror(null) ;  
         })

         .catch(err=>{
          if (err.message === 'AbortError')
          { console.log('fetch aborted')

          }else
          { setisPending(false) ; 
            seterror(err.message)
          }
           
         })         
         return () => 
         {console.log('cleanup')  ;    
         abortCont.abort()}
         
    }
    useEffect(()=>useeffectfunction,[url]) 
    return { trends , isPending , error}
}
export default useFetch;