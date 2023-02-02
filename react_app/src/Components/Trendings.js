import { Link } from "react-router-dom";
import Title from "./Style/Title";
import { useState } from "react";
import Algiers from "../images/pics/Algiers.png" ; 
import Constantine from "../images/pics/Constantine.png" ; 
import Setif from "../images/pics/Setif.png" ; 
import wahran from "../images/pics/wahran.png" ; 

const Trending = () => {

    const [trends , setTrends] = useState(
        [ { title: 'Algiers' , pic: Algiers , id:1 } , 
          { title: 'Oran' , pic:wahran ,  id:2 } , 
          { title: 'Setif' , pic:Setif ,  id:3 } ,
          { title: 'Constantine' , pic:Constantine ,  id:4 } 
        ]); 


    return ( 
         
        <div id="Trendings" className=" w-full h-screen  pt-[5%] ">

            <Title first="Trending Destination" ></Title>

           <div className=" flex flex-row justify-center items-center mx-auto mt-[50px] ">
                       
                      
           { trends.map((trend) =>

                            (<div className=" flex flex-row  mx-auto mb-[30px]" key={trend.id}>
                                <div className=" flex justify-center w-[250px] h-[250px] relative ">   
                                   <img src={trend.pic} alt="" className="  z-0   border-gris shadow-cutegris shadow-xl rounded-sm  backdrop-blur-lg hover:scale-110 cursor-pointer " />  
                                   <p className="absolute bottom-2 text-center text-white  text-xl z-10"> {trend.title} </p> 
                                   
                                </div>  
                            </div>

            ))}
                          
           </div>
        
        </div>
    );
}
 
export default Trending;