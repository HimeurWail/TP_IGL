

import header_bighouse from '../images/header_bighouse.png' ; 
import Globe from '../images/pics/globe.png'

const Header = () => {
    return ( 
        <div id="Home" className="header flex  lg:flex-row lg:p-[50px] bg-azra9 ">
               
               <div className='flex lg:flex-col '>
                {/*we're having a description  here */}
                        <div>
                        <p className='lg:text-[65px]  font-bold leading-tight'>
                        Discover the most Suitable properties </p>
                        <p className='lg:text-[20px] font-medium leading-tight'>
                        you’ll love. </p> 
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