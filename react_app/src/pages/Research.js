import { useEffect, useState } from "react";
import filtreicon from "../images/icons/filtre.svg"
import search from "../images/icons/search.svg"
import AnnMap from "../Components/AnnMap";


const Research = () => {

    const [Ais , setAis] = useState(null); 
    const [filtredAis, setFiltered] = useState(null);  
    const [isPending , setisPending] = useState(true) ; 
    const [error , seterror] = useState(null) ; 
   
    const handleSearch = ()=>
    {
        const requestOptions = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
            title: research})
        }
        fetch('http://127.0.0.1:8000/api/search/', requestOptions)
        .then((res) => {return res.json() ;})
        .then((data) => {
            setAis(data);
            setFiltered(data);
            setisPending(false);
            seterror(null);
        })

    }

    const resetInfos = () =>{
        setType('');
        setWilaya('');
        setCommune('');
        setYearmin('');
        setYearMax('');
        setPricemin('');
        setPricemax('');
    }

    const handleFiltre = ()=>
    {
        let res = [];
        let add = true;
        const array = Array.prototype.slice.call(Ais);
        for (let ai of array){
            add = true; 
            if((aiType !== '') && (ai.type !== aiType)){
                add = false;
            }
            else if ((aiWilaya !== '')&&(ai.willaya !== aiWilaya)){
                add = false;
            }
            else if ((aiCommune !== '')&&(ai.commune !== aiCommune)){
                add = false;
            }
            else if (((yearmin !== '')&&(yearmax !== ''))&&((ai.createdAt > yearmax) || (ai.createdAt < yearmin))){
                add = false;
            }
            else if (((pricemin !== '')&&(pricemax !== ''))&&((ai.price > pricemax) || (ai.price < pricemin))){
                add = false;
            }
            if (add){
                res.push(ai);
            }
            
        }
        console.log(res);
        setFiltered(res);
        resetInfos();
    }

    const[research,setResearch]= useState("") ;

    const [motsCles , setMots] = useState('') ; 
    const [aiType, setType] = useState('') ; 
    const [aiWilaya, setWilaya] = useState('') ; 
    const [aiCommune, setCommune] = useState('') ;
    const [yearmin, setYearmin] = useState('') ;
    const [yearmax, setYearMax] = useState('') ;
    const [pricemin , setPricemin] = useState('') ; 
    const [pricemax , setPricemax] = useState('') ; 
    
    const useeffectfunction = () =>
     {
      const abortCont = new AbortController() ; 
        fetch('http://127.0.0.1:8000/api/recentannounces/' ,{signal : abortCont.signal}) 
          .then(res =>
           { if(!res.ok)
            {
                throw Error('could not fetch the Announcement from that ressource') ; 
            }
             return res.json() ;
          }) 
         .then(Ais=>{
            setAis(Ais) ; 
            setFiltered(Ais);
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
         {console.log('cleanup');    
         abortCont.abort()}
         
    }
    useEffect(()=>useeffectfunction,['http://127.0.0.1:8000/api/recentannounces/']) 

    const wilayas =
[ 
    "Adrar" , "Chlef" , "Laghouat" , "Oum El Bouaghi" , "Batna" , "B??ja??a" , "Biskra" , "B??char" , 
    "Blida" , "Bouira" , "Tamanrasset" , "T??bessa" ,  "Tlemcen" , "Tiaret" , "Tizi Ouzou" , "Alger" ,
    "Djelfa" , "Jijel" , "S??tif" , "Sa??da" , "Skikda" , "SidiBelAbb??s" , "Annaba" , "Guelma" , "Constantine" , 
    "M??d??a" , "Mostaganem" , "M'Sila" , "Mascara" , "Ouargla" , "Oran" 
]

const types =
[
    "Land" , "Farmland" , "Apartment" , "House" , "Bungalow"
]


     return ( 
        
      
         <div className=" flex lg:flex-row flex-col items-start m-auto  justify-center ">
                        <div className=" flex flex-col   p-[30px] lg:border-r-2 lg:w-[30%] w-[100%] border-lightgris border-b-2 lg:border-b-0">
                                 <div className=" flex flex-col space-y-3 lg:space-y-[3px] " >
                            <h1 className="text-center text-ahmar sm:py-4 lg:py-1 text-xl font-bold"> Filtres </h1>
                                 <div className="flex flex-row justify-between  lg:flex-col  ">
                                 <label>Type</label>
                                    <input 
                                    list="types"
                                    name='type'
                                    required 
                                    placeholder='type'
                                    value={aiType}
                                    className=" w-[60%] sm:h-[12px] lg:w-[90%] lg:h-[40px] sm:mr-0 lg:mr-[2px] rounded-[8px] border-lightgris border-2 shadow-lg px-2 lg:p-3"
                                    onChange ={(e)=> setType(e.target.value)}  
                                    />
                                   
                                   <datalist id='types'>
                                                {types.map((type) =>(
                                                <option value={type} className='w-full'/>
                                                ))}
                                      </datalist>
                                    </div>

                                    <div className="flex flex-row justify-between lg:flex-col ">
                                    <label> Wilaya </label>
                                    <input
                                     required 
                                     list='wilayas'
                                     name='willaya'
                                     value={aiWilaya}
                                     placeholder='Willaya'
                                     className="w-[60%] sm:h-[12px] sm:p-1  lg:w-[90%] lg:h-[40px] lg:mr-[2px] rounded-[8px] border-lightgris border-2 shadow-lg px-2 lg:p-3"
                                     onChange ={(e)=> setWilaya(e.target.value)} >
                                     </input>
                                      <datalist id='wilayas'>
                                                {wilayas.map((willaya) =>(
                                                <option value={willaya} className='w-full'/>
                                                ))}
                                      </datalist>
                                     
                                     

                                    </div> 
                                   

                                    <div className="flex flex-row justify-between lg:flex-col ">
                                    <label> Commune </label>
                                      <input
                                            type="text"
                                            required 
                                            placeholder='commune'
                                            value={aiCommune}
                                            className="w-[60%] sm:h-[12px] sm:p-1  lg:w-[90%] lg:h-[40px] lg:mr-[2px] rounded-[8px] border-lightgris border-2 shadow-lg px-2 lg:p-3"
                                            onChange ={(e)=> setCommune(e.target.value)} >
                                         
                                        </input>
                                    </div> 

                                    <div className="flex flex-col space-y-2">
                                    <label className="text-center lg:text-left lg:text-black text-white"> Period </label>
                                    <div className="flex flex-row items-center justify-between">
                                   
                                    <input
                                            type="date"
                                            required 
                                            value={yearmin}
                                            className=" lg:order-1 order-2 w-[40%] sm:h-[12px] sm:p-1  lg:w-[55%] lg:h-[40px] lg:mr-[2px] rounded-[8px] border-lightgris border-2 shadow-lg px-2 lg:p-3"
                                            onChange ={(e)=> setYearmin(e.target.value)} >
                                         
                                        </input>
                                        <label className="lg:order-2 order-1 "> start date  </label>
                                    </div>


                                     <div className="flex flex-row items-center justify-between">
                                     
                                     <input
                                            type="date"
                                            required 
                                            value={yearmax}
                                            className="lg:order-1 order-2 w-[40%] sm:h-[12px] sm:p-1  lg:w-[55%] lg:h-[40px] lg:mr-[2px] rounded-[8px] border-lightgris border-2 shadow-lg px-2 lg:p-3"
                                            onChange ={(e)=> {setYearMax(e.target.value);}} >
                                         
                                        </input>
                                        <label className="lg:order-2 order-1 "> ending date  </label>
                                    </div> 
                                       
                                    </div> 
                                

                                    <div className="flex flex-row justify-between lg:flex-col">
                                                <label> Minimum Price </label>
                                                <input 
                                                type="number"
                                                required 
                                                value={pricemin}
                                                className="w-[50%] sm:h-[12px] sm:p-1  lg:w-[90%] lg:h-[40px] lg:mr-[2px] rounded-[8px] border-lightgris border-2 shadow-lg lg:p-3"
                                                onChange ={(e)=> setPricemin(e.target.value)}  
                                                />
                                    </div>  
                            
                                    <div className="flex flex-row justify-between lg:flex-col"> 
                                                <label> Maximum Price  </label>
                                                <input 
                                                type="number"
                                                required 
                                                value={pricemax}
                                                className="w-[50%] sm:h-[12px] sm:p-1  lg:w-[90%] lg:h-[40px] lg:mr-[2px] rounded-[8px] border-lightgris border-2 shadow-lg lg:p-3"
                                                onChange ={(e)=> setPricemax(e.target.value)}  
                                                />
                                    </div>

                                 </div>
                            <div className="bg-white relative mt-[20px] mx-auto">
                            <button className="bg-white btn1 border-ahmar border-2 px-[7px] lg:px-[25px] rounded-[10px] w-24 lg:w-32 " onClick={handleFiltre}>
                                        <div className="flex flex-rox items-center justify-between">
                                            <img className=" h-[25px] lg:h-[30px]" src={filtreicon} alt="" />
                                            <p className="pl-[5px] lg:pl-[10px]"> Filtre </p>
                                        </div>   
                             </button> 
                            </div>
                                   
                                
                         </div>

              <div className=" flex flex-col justify-center items-center mx-auto  ">
                        
                            <div className=" flex flex-row justify-center items-center lg:m-4 w-[100%] lg:w-[70%] pt-5 mb-12 lg:pt-[10px]">
                                    
                                     <input 
                                        type="text"
                                        required 
                                        value={research}
                                        placeholder='Search' 
                                        className="w-[80%] lg:w-[700px] h-[40px] px-4 rounded-[10px] rounded-tr-none rounded-br-none border-lightgris border-2 shadow-lightgris shadow-lg"
                                        onChange ={(e)=> {setResearch(e.target.value); console.log(research);}}  
                                    />
                                        <button className="bg-ahmar px-[5px] rounded-tl-none rounded-bl-none rounded-[11px] hover:bg-gris  shadow-lightgris shadow-lg " onClick={handleSearch}>
                                        <div className="flex flex-rox items-center justify-between">
                                            <img className="h-[40px] " src={search} alt="" />
                                        </div>
                                        
                                        </button>

                            </div> 
  
               
                             
                  { error ? <div> there's an error : {error} </div> : <></>}
                  { isPending ? <div> Loading ... </div> : <></>}
                  { Ais ? <AnnMap Ais={filtredAis}></AnnMap> : <></>}
            

                </div>
        
     </div>
             
      
         
      );
 }
 
export default Research;