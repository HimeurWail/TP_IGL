import React from 'react' ; 
import Type from '../images/icons/house.svg' ; 
import surface from '../images/icons/surface.svg' ; 
import Category from '../images/icons/category.svg' ; 

function AnnounceCard(props) {
  return (
      <div className="h-[250px] lg:h-[310px] w-[150px] lg:w-[200px] p-1 shadow-md rounded-sm flex flex-col justify-center gap-3">
        <img alt='announce' src={props.mainImg} className='rounded-sm'/>
        <p className='mx-auto text-base lg:text-xl'>{props.annonceLocation}</p>

        <div className='flex flex-row w-full gap-2 '>
          <div className='h-6 flex flex-row gap-1 text-[9px] lg:text-xs'>
            <img alt='icon' src={Category} className='h-3 lg:h-4 w-4 lg:w-5 my-auto'/>
            <p className='my-auto'>catgepr {props.aiCategory}</p>
          </div>  

          <div className='h-6 flex flex-row gap-1 text-[9px] lg:text-xs'>
            <img alt='icon' src={Type} className='h-3 lg:h-4 w-4 lg:w-5 my-auto'/>
            <p className='my-auto'> villa {props.aiType}</p>
          </div>  
        </div>

        <div className='h-6 flex flex-row gap-1 text-[9px] lg:text-xs'>
            <img alt='icon' src={surface} className='h-3 lg:h-4 w-4 lg:w-5 my-auto'/>
            <p className='my-auto'> {props.aiSurface} m </p>
        </div>

        <div className='h-6 flex flex-row justify-end border-t-2 border-lightgris'>
            <p className='mx-auto text-sm lg:text-lg'> {props.price} DA </p>
            <img alt='icon' src='./icons/Vector.png' className='h-2 lg:h-3 w-2 lg:w-3 my-auto'/>
        </div>            
      </div>
  )
}

export default AnnounceCard