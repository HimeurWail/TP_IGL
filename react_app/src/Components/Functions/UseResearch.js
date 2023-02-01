import { useEffect , useState } from "react";

const useResearch = (url, requestOptions) => 
{
     const [Ais , setAis] = useState(null); 
     const [ isPending , setisPending] = useState(true) ; 
     const [ error , seterror] = useState(null) ; 
   
     const useeffectfunction = () =>
     {
        fetch(url, requestOptions) 
          .then(res =>
           { if(!res.ok)
            {
                throw Error('could not fetch the Announcement from that ressource') ; 
            }
             return res.json() ;
          }) 
         .then(Ais=>{
            setAis(Ais) ; 
            setisPending(false) ;
            seterror(null) ;  
         })

         .catch(err=>{
           setisPending(false) ; 
           seterror(err.message)
          })         
         
    }
    useEffect(()=>useeffectfunction,[url]) 
    return { Ais , isPending , error}
}
export default useResearch;