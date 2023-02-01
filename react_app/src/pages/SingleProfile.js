import ListAnnonces from "../Components/ListAnnonces";
import ProfileSwitchButtons from "../Components/ProfileSwitchButtons";
import plus from "../images/icons/Vector.png" ; 
import { Link } from "react-router-dom";
import { GoogleLogout } from "react-google-login";

const SingleProfile = (props) => {
  const user = {
    nom: "cherif",
    prenom: "norhane",
    email: "kn_cherif@esi.dz",
    phone: "0656028159",
    adresse: "Tenes,Chlef,Algeria",
  };
  const auth = props.auth 
  const userName = props.userName
  const userPic = props.userPic 
  const name = props.name 

  const clientId = '763504218710-jee3n3jn6hvd315dfukpfet4hbjf869m.apps.googleusercontent.com'

  const logOut = () => {
    props.resetUserCallback();
  };

return (
    <div className=" flex flex-col lg:flex-row ">

      <div className="lg:w-[30%] mx-9 mt-16"  align="center">
        {/*Infos*/}
      <div className=" rounded-md w-[100%] h-[400px] shadow-md  ">
      
    
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

          <div>
            <p className="font-semibold my-2.5 bg text-lightgris">phone : </p>
            <p>{user.phone}</p>
          </div>

        </div>
        </div>
   
      {/* profile buttons */}
      <div className="flex flex-col w-[100%] justify-center items-center">

         
          <Link to={`/Add`}  className="w-[200px] h-[40px] px-4 mt-9 border-solid border rounded-md">
          <div className="flex flex-row justify-center items-center pt-[5px]" >
            <img className="w-[30px] h-[30px] mr-2" src={plus} alt="" /> 
            <p className="text-[20px]">Add</p>
            </div>  
          </Link>



        <button className="w-[200px] h-[40px] text-[20px] mt-9 border-solid border rounded-md">Log out</button>
        </div>

        <div>
                <GoogleLogout
                    clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut}
                    className='bg-ahmar m-2 p-2 hover:text-white rounded-[12px]'
                />
        </div>
      </div>





      <div className="lg:w-[64%] ">
        <ProfileSwitchButtons></ProfileSwitchButtons>
        <ListAnnonces></ListAnnonces>
      </div>

     
    </div>
  );
};

export default SingleProfile;