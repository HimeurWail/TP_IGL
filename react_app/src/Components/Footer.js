import insta from "../images/icons/instagram.svg"
import fb from "../images/icons/facebook.svg"
import linkin from "../images/icons/linkedin.svg"
const Footer = () => {
    return (  
        <div id="Footer" className="h-[250px] w-full bg-black flex flex-col justify-center items-center space-y-6" >
                <div className="w-6/12 lg:mb-[8px] flex flex-col justify-center items-center">
                    <h1 className="text-white "> Our name </h1>
                    <p className="text-white "> Il s’agit de développer une application Web permettant à l’utilisateur de publier et de  consulter les annonces immobilières
                     (AI) les plus récentes déposées par les utilisateurs de l’application ou provenant d’autres sites d’annonces. </p>
                </div>

                <div className="flex border-t-2 border-white lg:flex-row lg:justify-center lg:items-center lg:space-x-16 lg:pt-[20px]  lg:w-6/12 ">
                <a  href="https://www.instagram.com/facebook/" target="_blank" rel="noreferrer">
                          <img src={fb} alt="facebook" />
               </a>  

               <a href="https://www.instagram.com/instagram/"  target="_blank" rel="noreferrer">
                          <img src={insta} alt="insta" />
               </a>  

                <a href="https://www.instagram.com/instagram/"  target="_blank" rel="noreferrer">
                          <img src={linkin} alt="linkedin" />
               </a>  
              
                </div>
        </div>
    );
}
 
export default Footer;