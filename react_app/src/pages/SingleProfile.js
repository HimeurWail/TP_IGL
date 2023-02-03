import ListAnnonces from "../Components/ListAnnonces";
import ProfileSwitchButtons from "../Components/ProfileSwitchButtons";
import plus from "../images/icons/Vector.png" ; 
import { Link } from "react-router-dom";
import { GoogleLogout } from "react-google-login";
import { Navigate } from "react-router-dom" ; 
import { useState } from "react";
import { useEffect } from "react";

const SingleProfile = (props) => {

  
  const auth = props.auth 
  const userName = props.userName
  const userPic = props.userPic 
  const name = props.name 

  const [nav, setNav] = useState(false);
  //const nav = useNavigate();

  const clientId = '763504218710-jee3n3jn6hvd315dfukpfet4hbjf869m.apps.googleusercontent.com'

  const logOut = () => {
    props.resetUserCallback();
    setNav(true);
    
  };

return (
    <div className=" flex flex-col lg:flex-row ">

      <div className="lg:w-[30%]  mx-9 mt-16"  align="center">
        {/*Infos*/}
       <div className=" flex flex-col justify-center items-center  rounded-md w-[90%] h-[90%] shadow-md space-y-6  ">
      
    
        <img
          className="w-[165px] h-[165px] rounded-full my-2.5"
          src={userPic}
          alt="user"
        />
        <div className="my-2.5 text-3xl font-semibold">
          <span>{name}</span>
        </div>
        <div>


          <div>
            <p className="font-semibold my-2.5 bg text-lightgris">email : </p>
            <p>{userName}</p>
          </div>

           {/* profile buttons */}
      <div className="flex flex-col h-64 w-[100%] justify-center items-center space-y-6 pt-5">

         
             <Link to={`/Add`}  className="w-[200px] h-[45px] px-4 mt-9 shadow-sm shadow-cutegris rounded-sm hover:shadow-gris hover:scale-105 ">
             <div className="flex flex-row justify-center items-center pt-[5px] " >
                <img className="w-[25px] h-[25px] mr-2" src={plus} alt="" /> 
                 <p className="text-[20px]">Add</p>
             </div>  
            </Link>

           <GoogleLogout
            clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut}
            className=" w-[200px] hover:scale-105 flex justify-center hover:shadow-gris"     
        />

      </div>

        </div>
        </div>
   
  
      </div>


      <div className="lg:w-[64%] ">
        <ProfileSwitchButtons></ProfileSwitchButtons>
        <ListAnnonces userName={userName}></ListAnnonces>
      </div>

      {(nav || !props.auth) && <Navigate to="/" ></Navigate>}
     
    </div>
  );
};

export default SingleProfile;