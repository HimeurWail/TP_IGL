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
    "Adrar" , "Chlef" , "Laghouat" , "Oum El Bouaghi" , "Batna" , "Béjaïa" , "Biskra" , "Béchar" , 
    "Blida" , "Bouira" , "Tamanrasset" , "Tébessa" ,  "Tlemcen" , "Tiaret" , "Tizi Ouzou" , "Alger" ,
    "Djelfa" , "Jijel" , "Sétif" , "Saïda" , "Skikda" , "SidiBelAbbès" , "Annaba" , "Guelma" , "Constantine" , 
    "Médéa" , "Mostaganem" , "M'Sila" , "Mascara" , "Ouargla" , "Oran" 
]

const types =
[
    "Land" , "Farmland" , "Apartment" , "House" , "Bungalow"
]


     return ( 
        
      
         <div className=" flex lg:flex-row flex-col items-start m-auto   justify-between lg:justify-center ">
                        <div className=" flex flex-col  p-[30px] border-r-2 lg:w-[30%] w-[80%] border-lightgris ">
                                 <div className=" flex flex-col space-y-[3px]" >
                            <h1 className="text-center text-ahmar text-xl font-bold"> Filtres </h1>
                                 <div className="flex flex-col ">
                                 <label>Type</label>
                                    <input 
                                    list="types"
                                    name='type'
                                    required 
                                    placeholder='type'
                                    value={aiType}
                                    className="bg-lightgreen w-[90%] h-[40px] mr-[2px] rounded-[8px] border-lightgris border-2 shadow-lg p-3"
                                    onChange ={(e)=> setType(e.target.value)}  
                                    />
                                   
                                   <datalist id='types'>
                                                {types.map((type) =>(
                                                <option value={type} className='w-full'/>
                                                ))}
                                      </datalist>
                                    </div>

                                    <div className="flex flex-col">
                                    <label> Wilaya </label>
                                    <input
                                     required 
                                     list='wilayas'
                                     name='willaya'
                                     value={aiWilaya}
                                     placeholder='Willaya'
                                     className="bg-lightgreen w-[90%] h-[40px] mr-[2px] rounded-[8px] border-lightgris border-2 shadow-lg p-3"
                                     onChange ={(e)=> setWilaya(e.target.value)} >
                                     </input>
                                      <datalist id='wilayas'>
                                                {wilayas.map((willaya) =>(
                                                <option value={willaya} className='w-full'/>
                                                ))}
                                      </datalist>
                                     
                                     

                                    </div> 
                                   

                                    <div className="flex flex-col">
                                    <label> Commune </label>
                                      <input
                                            type="text"
                                            required 
                                            placeholder='commune'
                                            value={aiCommune}
                                            className="bg-lightgreen w-[90%] h-[40px] mr-[2px] rounded-[8px] border-lightgris border-2 shadow-lg p-3"
                                            onChange ={(e)=> setCommune(e.target.value)} >
                                         
                                        </input>
                                    </div> 

                                    <div className="flex flex-col space-y-2">
                                    <label> Period </label>
                                    <div className="flex flex-row items-center">
                                   
                                    <input
                                            type="date"
                                            required 
                                            value={yearmin}
                                            className="bg-lightgreen w-[50%] h-[40px] mr-[2px] rounded-[8px] border-lightgris border-2 shadow-lg p-3 "
                                            onChange ={(e)=> setYearmin(e.target.value)} >
                                         
                                        </input>
                                        <label> start date  </label>
                                    </div>


                                     <div className="flex flex-row items-center">
                                     
                                     <input
                                            type="date"
                                            required 
                                            value={yearmax}
                                            className="bg-lightgreen w-[50%] h-[40px] mr-[2px] rounded-[8px] border-lightgris border-2 shadow-lg p-3 "
                                            onChange ={(e)=> {setYearMax(e.target.value); alert(yearmax)}} >
                                         
                                        </input>
                                        <label> ending date  </label>
                                    </div> 
                                       
                                    </div> 
                                

                                    <div className="flex flex-col">
                                                <label> Minimum Price </label>
                                                <input 
                                                type="number"
                                                required 
                                                value={pricemin}
                                                className="bg-lightgreen w-[90%] h-[40px] mr-[2px] rounded-[8px] border-lightgris border-2 shadow-lg p-3"
                                                onChange ={(e)=> setPricemin(e.target.value)}  
                                                />
                                    </div>  
                            
                                    <div className="flex flex-col"> 
                                                <label> Maximum Price  </label>
                                                <input 
                                                type="number"
                                                required 
                                                value={pricemax}
                                                className="bg-lightgreen w-[90%] h-[40px] mr-[2px] rounded-[8px] border-lightgris border-2 shadow-lg p-3 "
                                                onChange ={(e)=> setPricemax(e.target.value)}  
                                                />
                                    </div>

                                 </div>
                            <div className="bg-white relative mt-[20px] mx-auto">
                            <button className="bg-white btn1 border-ahmar border-2 px-[25px]  rounded-[10px]  w-32 " onClick={handleFiltre}>
                                        <div className="flex flex-rox items-center justify-between">
                                            <img className="h-[30px]" src={filtreicon} alt="" />
                                            <p className="pl-[10px]"> Filtre </p>
                                        </div>   
                                    </button> 
                            </div>
                                   
                                
                         </div>

              <div className=" flex flex-col justify-center items-center mx-auto ">
                        
                            <div className=" flex flex-row justify-center items-center m-4 w-[350px] lg:w-[70%] pt-[10px]">
                                    
                                     <input 
                                        type="text"
                                        required 
                                        value={research}
                                        placeholder='Search' 
                                        className="bg-lightgreen w-[700px] h-[40px] px-4 rounded-[10px] rounded-tr-none rounded-br-none border-lightgris border-2 shadow-lightgris shadow-lg"
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