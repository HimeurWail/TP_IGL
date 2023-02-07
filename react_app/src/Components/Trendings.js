import { Link } from "react-router-dom";
import Title from "./Style/Title";
import { useState } from "react";
import Algiers from "../images/pics/Algiers.png" ; 
import Constantine from "../images/pics/Constantine.png" ; 
import Setif from "../images/pics/Setif.png" ; 
import wahran from "../images/pics/wahran.png" ; 

const Trending = () => {

    const [trends , setTrends] = useState(
        [ { title: 'AlGIERS' , pic: Algiers , id:1 } , 
          { title: 'ORAN' , pic:wahran ,  id:2 } , 
          { title: 'SETIF' , pic:Setif ,  id:3 } ,
          { title: 'CONSTANTINE' , pic:Constantine ,  id:4 } 
        ]); 


    return ( 
         
        <div id="Trendings" className=" w-full h-screen  pt-[5%] lg:mt-[-100px] mt-[-150px]">

            <Title first="Trending Destination" ></Title>

           <div className=" flex flex-wrap lg:flex-row justify-center items-center mx-auto mt-[25px] lg:mt-[50px] ">
                       
                      
           { trends.map((trend) =>

                (<div className=" flex flex-row  mx-auto mb-[30px]  " key={trend.id}>
                   
                      <div className="single-item flex justify-center hover:scale-105 w-[180px] h-[180px] lg:w-[250px] lg:h-[250px] cursor-pointer">   
                                  
                                  <img src={trend.pic} alt="" className="hover:scale-110 cursor-pointer " />  
                                  <div className="trendscontent text-xl  font-semibold">
                                       <p className=""> {trend.title} </p> 
                                  </div>
                                  
                                     
                        </div>  
               </div>

            ))}
                          
           </div>
        
        </div>
    );
}
 
export default Trending;