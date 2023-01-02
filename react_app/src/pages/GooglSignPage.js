import React, { useState, useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';

function GoogleSignPage() {
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
        <div>
            <h2>React Google Login</h2>
            <br />
            <br />
            <div className={`${(authentificated) && 'hidden'}`}>
                <h3>User not Logged in</h3>
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign in with Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    prompt="select_account"
                    isSignedIn={true}
                    className='hover:scale-110'
                />
            </div>
              
            <div className={`${(!authentificated) && 'hidden'}`}>
                <img src={profile.imageUrl} alt="user image" />
                <h3>User Logged in</h3>
                <p>Name: {profile.name}</p>
                <p>Email Address: {profile.email}</p>
                <br />
                <br />
                <GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut} />
            </div>
        </div>
    );
}
export default GoogleSignPage;