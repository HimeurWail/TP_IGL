import React from 'react' ; 
import Type from '../images/icons/house.svg' ; 
import surface from '../images/icons/surface.svg' ; 
import Category from '../images/icons/category.svg' ; 

function AnnounceCard(props) {
    const Ai = props.Ai 
    let img = '';
    if(String(Ai.imgURL).startsWith("/media"))
      img = 'http://127.0.0.1:8000'+Ai.imgURL;
    else 
      img = './default.jpg';
    
  return (
      <div className="h-[250px] lg:h-[350px] w-[150px] lg:w-[240px] p-3 shadow-xl rounded-sm flex flex-col justify-center gap-1 lg:gap-3 ">
        <img alt='announce' src={img} className='pt-4 w-40 h-40 lg:h-50 lg:w-50 mx-auto rounded-sm'/>
        
         
        <div className='flex flex-col w-full gap-1 h-[30%]'>
          <div className='h-6 flex flex-row gap-1 text-[9px] lg:text-sm'>
            <img alt='icon' src={Category} className='h-3 lg:h-4 w-4 lg:w-5 my-auto'/>
            <p className='my-auto'>{Ai.category}</p>
          </div>  

          <div className='h-6 flex flex-row gap-1 text-[9px] lg:text-sm'>
            <img alt='icon' src={Type} className='h-3 lg:h-4 w-4 lg:w-5 my-auto'/>
            <p className='my-auto'> {Ai.type}</p>
          </div> 

          <div className='h-6 flex flex-row gap-1 text-[9px] lg:text-sm'>
            <img alt='icon' src={surface} className='h-3 lg:h-4 w-4 lg:w-5 my-auto'/>
            <p className='my-auto'> {Ai.surface} m² </p>
        </div> 
        </div>

        

        <div className='h-6 flex flex-row justify-end border-t-4 border-lightgris'>
            <p className='mx-auto text-sm lg:text-lg'> {Ai.price} DA </p>
        </div>            
      </div>
  )
}

export default AnnounceCard