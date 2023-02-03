import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import RightArrow from '../images/pics/rightarrow.png' ; 
import LeftArrow from '../images/pics/leftarrow.png' ; 
import { useEffect, useRef, useState } from "react";
import AnnounceCard from './AnnounceCard';
import useFetch from './Functions/UseFetch';
import Title from './Style/Title';
import { Link } from "react-router-dom";

import circle from '../images/pics/circle.png' ; 


const Featured = () => {

    const swiperRef = useRef(null);
    const [Ais, setAis] = useState([]);

    useEffect(() =>{
      fetch('http://127.0.0.1:8000/api/recentannounces/').then((res) =>{
          return res.json()
      }).then((data)=>{setAis(data)})
    }, ['http://127.0.0.1:8000/api/recentannounces/']);

    return (
        <div id="Featured" className=" w-full h-screen pt-[90px] relative " >
            <Title first={" Featured "}></Title>
            <img src={circle} alt="" className=' absolute left-[52%] top-20 ' />
          <div className="flex items-center mx-auto md:space-x-8 sm:mt-[40px] md:mt-[40px] lg:space-x-6 lg:items-center lg:justify-center ">
          
            <div
              onClick={() => {
                swiperRef.current.swiper.slidePrev();
              }}
              className="cursor-pointer  hidden md:flex  w-[200px] md:w-[120px] lg:w-1/6"
            >
              <img src={LeftArrow} className="w-[50px] h-[50px]" alt="" />
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
                        className={` ${
                          isActive
                            ? "lg:scale-75"
                            : isPrev || isNext
                            ? "lg:scale-75"
                            : "lg:scale-75"
                        }`}
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
              <img src={RightArrow} className="w-[50px] h-[50px]" alt="" />
            </div>

          </div>
      
        </div>
        
      );
};
    
 
export default Featured;

