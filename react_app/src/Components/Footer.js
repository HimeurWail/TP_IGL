import insta from "../images/icons/instagram.svg"
import fb from "../images/icons/facebook.svg"
import linkin from "../images/icons/linkedin.svg"
const Footer = () => {
    return (  
        <div id="Footer" className="lg:h-[250px] h-44 w-full bg-black flex flex-col justify-center items-center space-y-6" >
                <div className="w-[90%] lg:w-6/12 lg:mb-[8px] flex flex-col justify-center items-center">
                    <h1 className="text-white text-xs lg:text-[18px] mb-2"> Baity application </h1>
                    <p className="text-white text-xs lg:text-[15px]"> Une application Web permettant à l’utilisateur de publier et de  consulter les annonces immobilières
                     (AI) les plus récentes déposées par les utilisateurs de l’application. </p>
                </div>

                <div className="flex border-t-2 border-white  justify-center items-center lg:space-x-16 space-x-6 lg:pt-[20px] pt-2  w-6/12 ">
                <a  href="https://www.instagram.com/facebook/" target="_blank" rel="noreferrer">
                          <img src={fb}  className="w-[20px] lg:w-[40px]" alt="facebook" />
               </a>  

               <a href="https://www.instagram.com/instagram/"  target="_blank" rel="noreferrer">
                          <img src={insta} className= " w-[20px] lg:w-[40px]" alt="insta" />
               </a>  

                <a href="https://www.instagram.com/instagram/"  target="_blank" rel="noreferrer">
                          <img src={linkin} className="w-[15px] lg:w-[35px]" alt="linkedin" />
               </a>  
              
                </div>
        </div>
    );
}
 
export default Footer;