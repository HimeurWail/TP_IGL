import React from "react";
import studio from "../images/pics/Studio.svg"
import bungalow from "../images/pics/bungalow.jpg";
import appartement from "../images/pics/appartement.svg";
import farmland from "../images/pics/farmland.png";
import house from "../images/pics/house.png";
import Title from "./Style/Title";
import { Link } from "react-router-dom";

function Find() {
  return (
    <div align="center" id="Find" className="h-screen w-full pt-[5%] ">
    
    <Title first={"Find a place that fits "}  second={"your comfort"}></Title>


     <div className="flex flex-row m-[20px] space-x-12 justify-center items-center">

        <div className="single-item flex justify-center hover:scale-105 w-[300px] cursor-pointer ">  
        <Link to={'/Plainlist'}>
        <img src={appartement} alt="" className="" />  
                        <div className="trendscontent text-xl  font-semibold">
                            <p className=""> Appartement </p> 
                       </div>
        </Link>      
                                                      
        </div>


       <div className="single-item flex justify-center hover:scale-105 w-[300px] cursor-pointer ">   
       <Link to={'/Plainlist'}>                        
                                  <img src={bungalow} alt="" className="" />  
                                     <div className="trendscontent text-xl  font-semibold">
                                          <p className=""> Bungalow </p> 
                                     </div>
         </Link>                                                  
                                                           
       </div>
          
        <div className="single-item flex justify-center hover:scale-105 w-[300px] cursor-pointer ">   
        <Link to={'/Plainlist'}>                         
                        <img src={studio} alt="" className="" />  
                                <div className="trendscontent text-xl  font-semibold">
                                     <p className=""> studio </p> 
                                </div>
                                </Link>                                                 
                                                           
        </div>


     </div>

       

     <div className="flex flex-row justify-center items-center lg:flex-row gap-12 space-x-12 " align="center">
 
            <div className="single-item flex justify-center hover:scale-105 w-[350px] cursor-pointer ">        
            <Link to={'/Plainlist'}>  
                            <img src={house} alt="" className=" w-[400px]" />  
                                        <div className="trendscontent text-xl  font-semibold">
                                              <p className=""> House </p> 
                          </div>   
              </Link>                              
            </div>
           
            
            <div className="single-item flex justify-center hover:scale-105 w-[350px] cursor-pointer ">        
            <Link to={'/Plainlist'}> 
                            <img src={farmland} alt="" className=" w-[400px]" />  
                              <div className="trendscontent text-xl  font-semibold">
                                  <p className=""> Farm Land </p> 
                              </div>   
             </Link>                              
            </div>
           
    </div>


      </div>
   
  );
}

export default Find;