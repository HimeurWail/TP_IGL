import { useParams } from "react-router-dom";
import Title from "../Components/Style/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import img from "../images/pics/nivVilla.svg" ; 
import { useRef } from "react";
import heart from "../images/icons/heart.svg"
import { useState } from "react";

import category from "../images/icons/category.svg" ; 
import typee from "../images/icons/house.svg" ; 
import surface from "../images/icons/surface.svg" ; 
import bedrooms from "../images/icons/bedrooms.svg" ;


import Footer from "../Components/Footer";

const SingleAnnonce = () => {
   const {id}= useParams() ; 
   const swiperRef = useRef(null);
   const [message , setMessage] = useState('') ; 

   const AddToFav = ()=>
   {
    // here we handle the backend addition
   }  
   const SendMessage = ()=>
   {
    // here we handle the backend addition
   }  


    return ( 
        <div  className="bg-beige pt-[5px] ">
         
         <div className="flex flex-col px-[5%]">
         <div className="flex flex-row justify  ">
                <button> something  </button>   
            </div>
            <Title first={"about this listing "}></Title>
           

            <div className=" picdiv flex flex-row items-start space-x-32 mx-auto my-[2%] ">
              
                <div className="flex flex-col px-auto bg-lightgris h-[450px] w-[460px] ">
                     
                     <div className=" w-[100%]">
                      <Swiper>
                        <SwiperSlide> <img src={img} alt="" /></SwiperSlide>
                        <SwiperSlide> <img src={img} alt="" /></SwiperSlide>
                        <SwiperSlide> <img src={img} alt="" /></SwiperSlide>
                      </Swiper>
                    
                     </div>

                     <div>
                        <p> rest of pictures </p>
                     </div>
              
                </div>

                <div className="flex flex-col w-[460px] h-[450px] ">
                    <div className="bg-black rounded-t-lg text-white h-[10%] text-center w-[100%] ">
                     <p> prix  this is car nb {id} </p>
                    </div>

                    <div className=" flex flex-col bg-white border-lightgris border-2 shadow-lg rounded-b-lg h-[90%] w-[100%]">
                      <div className=" h-[85%] w-[100%] border-b-2 border-lightgris">
                          <div className=" h-[50%] flex flex-col justify-center items-center mx-auto  ">
                            <div className= "pt-[2%]  w-[90%] h-[30%] border-lightgris border-2 rounded-lg ">
                                    <p> information de seller </p>
                            </div>
                            <div className= " shadow-xl w-[90%] h-[70%] border-lightgris border-2 rounded-lg ">
                                    
                                        <p className="px-[5%] py-[3%] ">
                                            name :   <br />
                                            lastname :  <br />
                                            email :  <br />
                                            phonenumber :   <br />
                                        </p>
                            </div>
                          </div>

                          <div className=" h-[50%] flex flex-col justify-center items-center mx-auto ">
                            <input
                             type="textarea"
                             required 
                             value={message}
                             className= " shadow-xl w-[90%] h-[100px] border-lightgris border-2 rounded-lg "
                             onChange ={(e)=> setMessage(e.target.value)}   />


                            <button onClick={SendMessage} className=" bg-ahmar shadow-lg
                             border-2 px-[25px] py-[5px] mt-[10px] rounded-[5px] text-white
                             hover:bg-white hover:border-ahmar hover:border-2 hover:text-ahmar "> 
                              Send
                            </button>

                          </div>
                      </div>

                      <div className="flex flex-col justify-center items-center ">
                           <button onClick={AddToFav} className=" bg-white border-lightgris  border-2 px-[25px] py-[5px] mt-[10px] rounded-[5px] hover:bg-black hover:text-white "> 
                                   <div className="flex flex-rox items-center justify-between">
                                            <img className="h-[20px]" src={heart} alt="" />
                                            <p className="pl-[10px]">   Add to favourites  </p>
                                        </div>   
                            </button>
                      </div>

                    </div>
                </div>

            </div>

            <div className=" typezge3 flex flex-row justify-center items-center h-screen  ">
                <div className="flex flex-col justify-center items-center 
                h-[220px] w-[20%] border-2 border-lightgris  ">
                    <img src={typee} alt="" className="mb-[20px]" />
                    <p className="text-opacity-50 text-gris"> type </p>
                    <p> villa  </p>

                </div>
                <div className="flex flex-col justify-center items-center 
                h-[220px] w-[20%] border-2 border-lightgris ">
                    <img src={category} alt="" className="mb-[20px]"/>
                    <p className="text-opacity-50 text-gris"> category </p>
                    <p> villa  </p>

                </div>
                <div className="flex flex-col justify-center items-center 
                h-[220px] w-[20%] border-2 border-lightgris ">
                    <img src={surface} alt="" className="mb-[20px]" />
                    <p className="text-opacity-50 text-gris" > surface </p>
                    <p> villa  </p>
                 </div>
                 <div className="flex flex-col justify-center items-center 
                 h-[220px] w-[20%] border-2 border-lightgris ">
                    <img src={bedrooms} alt=""  />
                    <p className="text-opacity-50 text-gris"> bedrooms  </p>
                    <p> villa  </p>
                 </div>

            </div>

            <div className=" location flex flex-row justify-center items-center  w-full h-screen bg-gris  ">
                    location 
            </div>

            <div className=" Description w-full h-screen  flex flex-col  pb-[150px] ">
                   <h1 className="text-[30px] font-bold ml-[60px]"> Description </h1>
                   <div  className=" shadow-xl w-[90%] h-[400px] border-lightgris border-2 rounded-lg mx-auto">
                            <p className="m-[4%]">
                                    description in here 
                            </p>
                   </div>
            </div>

         </div>
          
            <Footer></Footer>


        </div>
     );
}
 
export default SingleAnnonce;