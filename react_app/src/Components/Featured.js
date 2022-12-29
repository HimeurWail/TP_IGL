import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import RightArrow from '../images/pics/rightarrow.png' ; 
import LeftArrow from '../images/pics/leftarrow.png' ; 
import { useRef } from "react";
import AnnounceCard from './AnnounceCard';
import useFetch from './Functions/UseFetch';
import Title from './Style/Title';

const Featured = () => {

    const swiperRef = useRef(null);
    const {Ais , isPending , error } = useFetch('http://localhost:8004/featured') ; 
  

    return (
        <div id="Featured" className=" w-full h-screen pt-[90px]" >
            <Title first={" Featured "}></Title>
          <div className="flex items-center md:space-x-8 sm:mt-[40px] md:mt-[40px] lg:space-x-8">
          
            <div
              onClick={() => {
                swiperRef.current.swiper.slidePrev();
              }}
              className="cursor-pointer  hidden md:flex  w-[200px] md:w-[120px] lg:w-1/6"
            >
              <img src={LeftArrow} alt="" />
            </div>
    {/*
            <Swiper
              ref={swiperRef}
              spaceBetween={10}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                700: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 4,
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
                            ? "lg:scale-100"
                            : "lg:scale-75"
                        }`}
                      >
est ce que ndkhlou 
                        <AnnounceCard props={Ai}></AnnounceCard>
                      </div>
                    )}
                  </SwiperSlide>
                );
              })}
            </Swiper>
   */ }
            <div
              onClick={() => {
                swiperRef.current.swiper.slideNext();
              }}
              className="cursor-pointer  hidden md:flex w-[200px] md:w-[120px] lg:w-1/6"
            >
              <img src={RightArrow} alt="" />
            </div>
          </div>
      
        </div>
        
      );
};
    
 
export default Featured;

