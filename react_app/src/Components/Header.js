

import header_bighouse from '../images/pics/header_bighouse.png' ; 
import Globe from '../images/pics/globe.png' ; 
import people from '../images/pics/people.png' ; 
import circle from '../images/pics/circle.png' ; 
import whitespace from '../images/pics/whitespace.png' ; 


const Header = () => {
    return ( 
        <div id="Home" className=" flex flex-col justify-center items-center ">
             <div className="flex  lg:flex-row lg:p-[50px] bg-azra9 items-start ">
               <div className='flex lg:flex-col space-y-4 justify-center pl-[50px] '>
                {/*we're having a description  here */}
                        <div className=' z-0'>
                            <img src={circle} alt="" className=' absolute left-1/4 top-[200px] w-[160px] z-10 ' />
                        <p className='lg:text-[55px]  font-bold leading-tight z-10'>
                        Discover the most Suitable properties </p>
                        <p className='lg:text-[30px] mt-[20px] font-bold leading-tight'>
                        you’ll love. </p> 
                        </div>

                        <div>
                        <img className='h-[160px]' src={people} alt="" />
                        </div>

                        <div className='flex gap-4 '>
                            <img className='rotate w-[38px]' src={Globe} alt="globe" />
                            <p className='text-[20px]'> 58 wilayas supported </p>
                        </div>
                            
                </div>

                <img src={header_bighouse} className="w-[100px]  lg:w-[700px] " alt="" />
                
             </div>  
              
            <img src={whitespace} alt="" className=' absolute top-[470px] '/>
        </div>
     );
}
 
export default Header;