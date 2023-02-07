import header_bighouse from '../images/pics/header_bighouse.png' ; 
import Globe from '../images/pics/globe.png' ; 
import people from '../images/pics/people.png' ; 
import circle from '../images/pics/circle.png' ; 
import whitespace from '../images/pics/whitespace.png' ; 


const Header = () => {
    return ( 
        <div id="Home" className=" flex flex-col  justify-center items-center ">
             <div className="flex h-[230px] lg:h-screen w-full lg:flex-row lg:p-[50px] bg-azra9 items-start ">
               <div className='flex flex-col space-y-4 justify-center pl-[50px] '>
                {/*we're having a description  here */}
                        <div className=' z-0'>
                            
                        <p className='lg:text-[55px]  font-bold leading-tight z-10'>
                        Discover the most  </p>
                        <p className='lg:text-[55px]  font-bold leading-tight z-10'>
                        Suitable properties </p>
                        <p className='lg:text-[55px]  font-bold leading-tight z-10'>
                        you’ll love. </p>
                        
                        </div>

                        <div>
                        <img className='h-[100px] lg:h-[160px]' src={people} alt="" />
                        </div>

                        <div className='flex gap-4'>
                            <img className='rotate w-[30px] lg:w-[38px]' src={Globe} alt="globe" />
                            <p className='lg:text-[20px] text-[16px]'> 58 wilayas supported </p>
                        </div>
                            
                </div>

                <img src={header_bighouse} className="w-[200px]  lg:w-[630px] " alt="" />
                
             </div>  
              
            <img src={whitespace} alt="" className=' absolute top-[150px] lg:top-[300px] '/>
        </div>
     );
}
 
export default Header;