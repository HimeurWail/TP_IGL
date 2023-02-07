import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import RightArrow from '../images/pics/rightarrow.png' ; 
import LeftArrow from '../images/pics/leftarrow.png' ; 
import { useEffect, useRef, useState } from "react";
import AnnounceCard from './AnnounceCard';
import useFetch from './Functions/UseFetch';
import Title from './Style/Title';
import { Link } from "react-router-dom";



const Featured = () => {

    const swiperRef = useRef(null);
    const [Ais, setAis] = useState([]);

    useEffect(() =>{
      fetch('http://127.0.0.1:8000/api/recentannounces/').then((res) =>{
          return res.json()
      }).then((data)=>{setAis(data)})
    }, ['http://127.0.0.1:8000/api/recentannounces/']);

    return (
        <div id="Featured" className=" w-full h-screen pt-[90px] relative lg:mt-[50px] mt-[650px] " >
            <Title first={" Featured "}></Title>
          
          <div className="flex items-center mx-auto md:space-x-8 lg:mt-[40px]  pl-32 lg:pl-2  lg:space-x-6 lg:items-center lg:justify-center ">
          
            <div
              onClick={() => {
                swiperRef.current.swiper.slidePrev();
              }}
              className="cursor-pointer lg:w-1/6"
            >
              <img src={LeftArrow} className="w-0 h-0 lg:w-[50px] lg:h-[50px] " alt="" />
            </div>
   
            <Swiper
              ref={swiperRef}
              spaceBetween={3}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                700: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 5,
                },
              }}
            >
              {Ais.map((Ai, idx) => {
                return (
                    
                  <SwiperSlide key={idx}>
                    {({ isActive, isNext, isPrev }) => (
                      <div
                        className="scale-100 lg:scale-75  p-8 lg:p-1"
                      >
                       <Link to={`/Research/${Ai.announceCode}`}>
                          <AnnounceCard Ai={Ai}></AnnounceCard > 
                       </Link>
                      </div>
                    )}
                  </SwiperSlide>
                );
              })}
            </Swiper>
    
            <div
              onClick={() => {
                swiperRef.current.swiper.slideNext();
              }}
              className="cursor-pointer  hidden md:flex w-[200px] md:w-[120px] lg:w-1/6"
            >
              <img src={RightArrow} className="w-0 h-0  lg:w-[50px] lg:h-[50px]" alt="" />
            </div>

          </div>
      
        </div>
        
      );
};
    
 
export default Featured;