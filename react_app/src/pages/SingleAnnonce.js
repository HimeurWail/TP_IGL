import { useParams } from "react-router-dom";
import Title from "../Components/Style/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useRef } from "react";
import heart from "../images/icons/heart.svg"
import { useState } from "react";

import category from "../images/icons/category.svg" ; 
import typee from "../images/icons/house.svg" ; 
import surface from "../images/icons/surface.svg" ; 
import bedrooms from "../images/icons/bedrooms.svg" ;
import position from "../images/icons/positionicon.png" ; 
import LeftArrow from "../images/icons/leftt.png" ; 
import RightArrow from "../images/icons/rightt.png" ; 

import Footer from "../Components/Footer";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SingleAnnonce = () => {
   const {id}= useParams() ; 
   const swiperRef = useRef(null);

   const [message , setMessage] = useState('') ; 

   const [Ai,setAi] = useState({});
   const [imgsUrls, setImgs] = useState([])

   const AddToFav = ()=>
   {
    // here we handle the backend addition
   }  
   const SendMessage = ()=>
   {
    // here we handle the backend addition
   }  
   useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/announce/?code=`+id).then((res) => {return res.json();}).then((data)=> {setAi(data)} ).catch((err) => console.log(err))
    fetch('http://127.0.0.1:8000/api/getimgs/?code='+id).then((res) => {return res.json();}).then((data)=> {setImgs(data);} ).catch((err) => console.log(err))
   }, []);


    return ( 
        <div  className="bg-beige pt-[3%] ">
         
         <div className="flex flex-col px-[5%]">
         <div className="flex flex-row justify  ">
               
            </div>
            <Title first={"about this listing "}></Title>

            <div className=" picdiv flex flex-row items-center  space-x-32 mx-auto my-[2%] ">
              
                <div className="flex flex-col px-auto border-lightgris rounded-lg border-2 p-2 h-[320px] w-[460px] ">
                     
                     <div className="flex flex-row items-center justify-center w-[100%]">
                   {/*  <div
              onClick={() => {
                swiperRef.current.swiper.slidePrev();
              }}
              className="cursor-pointer  hidden md:flex  w-[200px] md:w-[120px] lg:w-1/6"
            >
              <img src={LeftArrow} className="w-[20px] h-[50px]" alt="" />
                     </div>
            */}
                      <Swiper
                      modules={[Navigation, Pagination, Scrollbar, A11y]}
                     
                      navigation={{
                        prevEl: '.prev',
                        nextEl: '.next',
                      }}
                      effect="fade"
                      pagination={{ clickable: true }}
                                      
                       ref={swiperRef}>
                        {imgsUrls.map((imgUrl) => {
                          return <SwiperSlide> <img className="h-[310px] w-[450px] py-3" src={`http://127.0.0.1:8000${imgUrl}`} alt="" /></SwiperSlide>
                        })}
                      </Swiper>
                    
                    { /* <div
              onClick={() => {
                swiperRef.current.swiper.slideNext();
              }}
              className="cursor-pointer  hidden md:flex w-[200px] md:w-[120px] lg:w-1/6"
            >
              <img src={RightArrow} className="w-[20px] h-[50px]" alt="" />
                      </div>
*/}
                     </div>
 
               </div>

                <div className="flex flex-col w-[460px] h-[410px] ">
                    <div className="bg-black rounded-t-lg  text-white h-[10%] text-center w-[100%] ">
                     <p className=" text-center" > Price : {Ai.price} DA  </p>
                    </div>

                    <div className=" flex flex-col bg-white border-lightgris border-2 shadow-lg rounded-b-lg h-[90%] w-[100%]">
                      <div className=" h-[85%] w-[100%] border-b-2 border-lightgris">
                          <div className=" h-[40%] flex flex-col justify-center items-center mx-auto  ">
                            <div className= "pt-[2%] text-center  w-[90%] h-[30%] hover:underline  ">
                                    <p> Information About the seller </p>
                            </div>
                            <div className= " shadow-xl w-[90%] h-[70%] border-lightgris border-2 rounded-lg ">
                                    
                                        <p className="px-[5%] py-[3%] ">
                                            Contact : {Ai.userContacts}  <br />
                                            email : {Ai.userId}   <br />
                                           
                                        </p>
                            </div>
                          </div>

                          <div className=" h-[60%] flex flex-col justify-center items-center mx-auto ">
                            <label className="text-center"> Make an Offer </label>
                            <input
                             type="textarea"
                             required 
                             placeholder="Write a message to the seller "
                             value={message}
                             className= "text-center shadow-xl w-[90%] h-[100px] border-lightgris border-2 rounded-lg "
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

            <div className=" flex flex-col  px-[10%] py-[2%]">
              <h1 className="pl-2 text-lg font-bold"> {Ai.title} </h1>
              <div className="flex flex-row items-end ">
              <img src={position}className="pr-4" alt="" />
                <h1> {Ai.adress} - {Ai.commune} - {Ai.willaya} </h1>
               
            </div>
               
              </div>
             
            <div className=" typezge3 flex flex-row justify-center items-center h-[50%] mb-[10%] ">
             
                <div className="flex flex-col justify-center items-center 
                h-[220px] w-[20%] border-2 border-lightgris  ">
                    <img src={typee} alt="" className="mb-[20px]" />
                    <p className="text-opacity-50 text-gris"> type </p>
                    <p> {Ai.type} </p>

                </div>
                <div className="flex flex-col justify-center items-center 
                h-[220px] w-[20%] border-2 border-lightgris ">
                    <img src={category} alt="" className="mb-[20px]"/>
                    <p className="text-opacity-50 text-gris"> category </p>
                    <p> {Ai.category}  </p>

                </div>
                <div className="flex flex-col justify-center items-center 
                h-[220px] w-[20%] border-2 border-lightgris ">
                    <img src={surface} alt="" className="mb-[20px]" />
                    <p className="text-opacity-50 text-gris" > surface </p>
                    <p> {Ai.surface} m² </p>
                 </div>
                 <div className="flex flex-col justify-center items-center 
                 h-[220px] w-[20%] border-2 border-lightgris ">
                    <img src={bedrooms} alt=""  />
                    <p className="text-opacity-50 text-gris"> Wilaya  </p>
                    <p> {Ai.willaya}  </p>
                 </div>

            </div>

            <div className=" location flex flex-row justify-center items-center  w-full h-[400px] bg-gris  ">
                    location 
            </div>

            <div className=" Description w-full h-screen  flex flex-col  pb-[150px] ">
                   <h1 className="text-[30px] font-bold ml-[60px] p-5"> Description :  </h1>
                   <div  className=" shadow-xl w-[90%] h-[350px] border-lightgris border-2 rounded-lg mx-auto">
                           <p className="m-[4%] underline ">
                            Offer created in :  { Ai.createdAt}
                           </p>
                            <p className="m-[4%]">
                                    {Ai.description } 
                            </p>
                   </div>
            </div>

         </div>
          
            <Footer></Footer>


        </div>
     );
}
 
export default SingleAnnonce;