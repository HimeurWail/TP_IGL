/* eslint-disable jsx-a11y/alt-text */
import { Link } from 'react-router-dom' ; 
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import { useState , useEffect } from 'react';
import profilepic from "../images/icons/profile.svg" ; 
import notif from "../images/icons/notif.svg" ; 
import logo from "../images/icons/logo.svg"
/* the Navbar still need updates, this isn't the final version, it is just for testing */

const Navbar = (props) => {
    const [ profile, setProfile ] = useState([]);
    const authentificated = props.auth;
    const clientId = '763504218710-jee3n3jn6hvd315dfukpfet4hbjf869m.apps.googleusercontent.com';

    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: ''
            })
        };
        gapi.load('client:auth2', initClient);
    });

    const onSuccess = (res) => {
        props.setUserCallback({name: res.profileObj.name, userName: res.profileObj.email, pic: res.profileObj.imageUrl}); //set user state of App.js
        setProfile(res.profileObj);
    };

    const onFailure = (err) => {
        console.log('failed', err);
    };

    
    return ( 
        <nav className="navbar sticky z-10 top-0 p-[5px] m-auto  bg-azra9 cursor-pointer font-normal flex flex-row items-center jutify-center px-[15px] py-[0px] w-full">
  
          <img className='w-[100px] h-[100px]' src={logo} alt="" />
             
               
          <div className="Btns px-5 mx-[10px] flex items-center justify-center ml-auto mr-auto ">
              <a className=' relative p-[10px] ml-[20px] ' href="/#Home"> Home </a> 
              <a className=' relative p-[10px] ml-[20px] ' href="/#Find"> Find </a>
              <a className=' relative p-[10px] ml-[20px] ' href="/#Featured"> Featured </a>
              <a className=' relative p-[10px] ml-[20px] ' href="/#Trendings"> Trendings </a>
              <a className=' relative p-[10px] ml-[20px] ' href="/#ContactUs"> Contact Us </a>
             <Link className=' relative p-[10px] ml-[20px] '  to="/Research"> Research </Link> 
              
          </div>

          <div className="sign px-[50px] items-end flex ">
            <div className={`${authentificated && 'hidden'}`}>
                <GoogleLogin
                        clientId={clientId}
                        buttonText="Sign in"
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={'single_host_origin'}
                        prompt="select_account"
                        isSignedIn={true}
                        className='bg-ahmar m-2 p-2 hover:text-white rounded-[12px]'
                />
            </div>
            <div className={`${!authentificated && 'hidden'}`} >
                <div className=' flex flex-row space-x-5'>
                <Link className=''  to="/Profile"> 
                <img src={profilepic} className="w-[40px] h-[40px] hover:scale-90 " />
                </Link>  
                <img src={notif} className="w-[40px] h-[40px] hover:scale-90" />
                </div>
                
            </div>
            
         </div>
      
        </nav>
     );
}
 
export default Navbar;