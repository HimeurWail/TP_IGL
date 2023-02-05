import insta from "../images/icons/instagram.svg"
import fb from "../images/icons/facebook.svg"
import linkin from "../images/icons/linkedin.svg"
const Footer = () => {
    return (  
        <div id="Footer" className="lg:h-[250px] h-[300px] w-full bg-black flex flex-col justify-center items-center space-y-6 mt-[120px] lg:mt-0" >
                <div className="lg:w-6/12 w-[80%] lg:mb-[8px] flex flex-col justify-center items-center">
                    <h1 className="text-white "> Baity </h1>
                    <p className="text-white text-center"> Il s’agit de développer une application Web permettant à l’utilisateur de publier et de  consulter les annonces immobilières
                     (AI) les plus récentes déposées par les utilisateurs de l’application ou provenant d’autres sites d’annonces. </p>
                </div>

                <div className="flex border-t-2 border-white flex-row justify-center items-center space-x-10 lg:space-x-16 pt-[20px]  w-6/12 ">
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