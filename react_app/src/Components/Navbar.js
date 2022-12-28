import { Link } from 'react-router-dom' ; 


const Navbar = () => {
    return ( 
        <nav className="navbar sticky top-0 p-[5px] m-auto  bg-azra9 cursor-pointer font-medium top-0 flex flex-row items-center jutify-center px-[15px] py-[10px] w-full">
          <div className=''> 

          <h1> logo here </h1>
            </div>    
               
          <div className="Btns px-5 mx-[10px] flex items-center justify-center ml-auto mr-auto ">
              <a className=' relative p-[10px] ml-[20px] ' href="/#Home"> Home </a> 
              <a className=' relative p-[10px] ml-[20px] ' href="/#Find"> Find </a>
              <a className=' relative p-[10px] ml-[20px] ' href="/#Featured"> Featured </a>
              <a className=' relative p-[10px] ml-[20px] ' href="/#Trendings"> Trendings </a>
              <a className=' relative p-[10px] ml-[20px] ' href="/#ContactUs"> Contact Us </a>
             <Link className=' relative p-[10px] ml-[20px] '  to="/Research"> Research </Link> 
              
          </div>

          <div className="sign px-[50px] items-end flex ">
            <Link className="bg-ahmar m-2 p-2 hover:text-white rounded-[12px]"  to="/SignIn"> Sign up  </Link>
         </div>
           
      
        </nav>
     );
}
 
export default Navbar;