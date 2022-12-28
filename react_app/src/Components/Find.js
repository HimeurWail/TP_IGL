import React from "react";
import studio from "../images/pics/Studio.svg"
import nivVilla from "../images/pics/nivVilla.svg";
import appartement from "../images/pics/appartement.svg";
import chambre from "../images/pics/chambre.svg";
import villa from "../images/pics/villa.svg";
import Title from "./Style/Title";

function Find() {
  return (
    <div align="center" id="Find" className="h-screen w-full pt-[5%] ">
    
    <Title first={"Find a place that fits "}  second={"your comfort"}></Title>


      <div className="flex flex-col m-[20px]  justify-center items-center ">
        <div className="flex flex-col lg:flex-row gap-12  px-[50px] pb-[20px]" align="center">
          <div className=" 1 relative">
            <div>
              <img className=" w-[300px]" src={studio} />
            </div>
            <div className=" absolute w-[100%] h-[100%] top-3/4">
              <a href="#" className=" text-[20px] pl-[5px] pr-[5px] text-white font-bold hover:bg-white hover:text-black">
                STUDIO
              </a>
            </div>
          </div>
          <div className=" 2 relative">
            <div>
              <img className=" w-[300px]" src={nivVilla} />
            </div>
            <div className=" absolute w-[100%] h-[100%] top-3/4 ">
              <a href="#" className="text-[20px] pl-[5px] pr-[5px] text-white font-bold hover:bg-white hover:text-black">
                NIVEAU VILLA
              </a>
            </div>
          </div>

          
          <div className=" 3 relative">
            <div>
              <img className=" w-[300px]" src={appartement} />
            </div>
            <div className=" absolute w-[100%] h-[100%] top-3/4 ">
              <a href="#" className="text-[20px] pl-[5px] pr-[5px] text-white font-bold hover:bg-white hover:text-black">
                APPARTEMENT
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 px-[50px] " align="center">

          <div className=" 1 relative">
            <div>
              <img className="w-[500px]" src={chambre} />
            </div>
            <div className=" absolute w-[100%] h-[100%] top-3/4">
              <a href="#" className="text-[20px] pl-[5px] pr-[5px] text-white font-bold hover:bg-white hover:text-black">
                CHAMBRE
              </a>
            </div>
          </div>


          <div className=" 2 relative">
            <div>
              <img className="w-[500px]" src={villa} />
            </div>
            <div className=" absolute w-[100%] h-[100%] top-3/4 ">
              <a href="#" className=" text-[20px] pl-[5px] pr-[5px] text-white font-bold hover:bg-white hover:text-black">
                VILLA
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Find;