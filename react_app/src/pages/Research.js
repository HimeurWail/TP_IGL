import { useState } from "react";
import filtreicon from "../images/icons/filtre.svg"
import search from "../images/icons/search.svg"
import useFetch from "../Components/Functions/UseFetch";
import AnnMap from "../Components/AnnMap";


const Research = () => {
   
    const handleSearch = ()=>
    {
     // here we handle the backend research 
    }

    const handleFiltre = ()=>
    {
     // here we handle the backend research 
    }

    const[research,setResearch]= useState() ;

    const [motsCles , setMots] = useState('') ; 
    const [aiType, setType] = useState('') ; 
    const [aiWilaya, setWilaya] = useState('') ; 
    const [aiCommune, setCommune] = useState('') ;
    const [yearmin, setYearmin] = useState('') ;
    const [yearmax, setYearMax] = useState('') ;
    const [pricemin , setPricemin] = useState('') ; 
    const [pricemax , setPricemax] = useState('') ; 
   
    const { Ais, isPending, error } = useFetch('http://localhost:8004/featured');
     return ( 
        
      
         <div className=" flex flex-row items-start m-auto justify-between ">
                        <div className=" flex flex-col p-[30px] h-screen border-r-2 w-[30%] border-lightgris">
                            <form onSubmit={handleFiltre} >
                                 <div className=" flex flex-col space-y-[3px]" >
                                 <div className="flex flex-col ">
                                    <label>Type</label>
                                    <input 
                                    type="text"
                                    required 
                                    value={aiType}
                                    className="bg-lightgreen w-[90%] h-[30px] mr-[2px] rounded-[8px] border-lightgris border-2 shadow-lg"
                                    onChange ={(e)=> setType(e.target.value)}  
                                    />
                                    </div>

                                    <div className="flex flex-col">
                                    <label> Wilaya </label>
                                      <input
                                            type="text"
                                            required 
                                            value={aiWilaya}
                                            className="bg-lightgreen w-[90%] h-[30px] mr-[2px] rounded-[8px] border-lightgris border-2 shadow-lg"
                                            onChange ={(e)=> setWilaya(e.target.value)} >
                                         
                                        </input>
                                    </div> 

                                    <div className="flex flex-col">
                                    <label> Commune </label>
                                      <input
                                            type="text"
                                            required 
                                            value={aiCommune}
                                            className="bg-lightgreen w-[90%] h-[30px] mr-[2px] rounded-[8px] border-lightgris border-2 shadow-lg "
                                            onChange ={(e)=> setCommune(e.target.value)} >
                                         
                                        </input>
                                    </div> 

                                    <div className="flex flex-col">
                                    <label> Year Min </label>
                                      <input
                                            type="text"
                                            required 
                                            value={yearmin}
                                            className="bg-lightgreen w-[90%] h-[30px] mr-[2px] rounded-[8px] border-lightgris border-2 shadow-lg"
                                            onChange ={(e)=> setYearmin(e.target.value)} >
                                         
                                        </input>
                                    </div> 
                                  
                                   <div className="flex flex-col">
                                    <label> Year max  </label>
                                        <input
                                            type="text"
                                            required 
                                            value={yearmax}
                                            className="bg-lightgreen w-[90%] h-[30px] mr-[2px] rounded-[8px] border-lightgris border-2 shadow-lg"
                                            onChange ={(e)=> setYearMax(e.target.value)} >
                                         
                                        </input>
                                    </div> 

                                    <div className="flex flex-col">
                                                <label> Prix Min </label>
                                                <input 
                                                type="text"
                                                required 
                                                value={pricemin}
                                                className="bg-lightgreen w-[90%] h-[30px] mr-[2px] rounded-[8px] border-lightgris border-2 shadow-lg"
                                                onChange ={(e)=> setPricemin(e.target.value)}  
                                                />
                                    </div>  
                            
                                    <div className="flex flex-col"> 
                                                <label> Prix Max </label>
                                                <input 
                                                type="text"
                                                required 
                                                value={pricemax}
                                                className="bg-lightgreen w-[90%] h-[30px] mr-[2px] rounded-[8px] border-lightgris border-2 shadow-lg "
                                                onChange ={(e)=> setPricemax(e.target.value)}  
                                                />
                                    </div>

                                 </div>
                            
                                    <button className="bg-white border-ahmar border-2 px-[25px] mt-[50px] rounded-[10px] hover:text-ahmar " onClick={()=>handleFiltre}>
                                        <div className="flex flex-rox items-center justify-between">
                                            <img className="h-[30px]" src={filtreicon} alt="" />
                                            <p className="pl-[10px]"> Filtre </p>
                                        </div>   
                                    </button>

                            </form>    
                                
                         </div>


               <div className=" flex flex-col justify-center items-center mx-auto ">
                        
                            <div className=" flex flex-row justify-center items-center  pt-[10px]">
                                    
                                            <input 
                                        type="text"
                                        required 
                                        value={research}
                                        className="bg-lightgreen w-[700px] h-[40px]  rounded-[10px] border-lightgris border-2 "
                                        onChange ={(e)=> setResearch(e.target.value)}  
                                        />
                                        <button className="bg-ahmar px-[5px] rounded-[11px] hover:bg-gris " onClick={()=>handleSearch}>
                                        <div className="flex flex-rox items-center justify-between">
                                            <img className="h-[40px]" src={search} alt="" />
                                        </div>
                                        
                                        </button>

                            </div> 

                            <div>
                                
                            </div>
                            
                            
               
                             
            { error ? <div> there's an error : {error} </div> : <></>}
            { isPending ? <div> Loading ... </div> : <></>}
             {Ais ? <AnnMap Ais={Ais}></AnnMap> : <></>}

                            </div>
        
         </div>
             
      
         
      );
 }
 
export default Research;