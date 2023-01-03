import { Link } from 'react-router-dom' ; 
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import { useState , useEffect } from 'react';

const Navbar = () => {
    const [ profile, setProfile ] = useState([]);
    const [authentificated, setAuthentificated] = useState(false)
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
        setProfile(res.profileObj);
        setAuthentificated(true);
    };

    const onFailure = (err) => {
        console.log('failed', err);
    };

    const logOut = () => {
        setAuthentificated(false);
    };
    return ( 
        <nav className="navbar sticky top-0 p-[5px] m-auto  bg-azra9 cursor-pointer font-normal top-0 flex flex-row items-center jutify-center px-[15px] py-[10px] w-full">
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
           
      
        </nav>
     );
}
 
export default Navbar;