

import header_bighouse from '../images/header_bighouse.png' ; 
import Globe from '../images/pics/globe.png' ; 
import people from '../images/pics/people.png'

const Header = () => {
    return ( 
        <div id="Home" className="header flex  lg:flex-row lg:p-[50px] bg-azra9 items-start ">
               
               <div className='flex lg:flex-col space-y-6 justify-center pl-[50px] '>
                {/*we're having a description  here */}
                        <div>
                        <p className='lg:text-[55px]  font-bold leading-tight'>
                        Discover the most Suitable properties </p>
                        <p className='lg:text-[30px] mt-[20px] font-bold leading-tight'>
                        you’ll love. </p> 
                        </div>

                        <div>
                        <img className='h-[120px]' src={people} alt="" />
                        </div>

                        <div className='flex gap-4 '>
                            <img className='rotate w-[30px]' src={Globe} alt="globe" />
                            <p className='text-[20px]'> 58 wilayas supported </p>
                        </div>
                            
                </div>

                <img src={header_bighouse} className="w-[150px]  lg:w-[800px] " alt="" />

        </div>
     );
}
 
export default Header;