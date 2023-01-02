import React from 'react'
import { GoogleLogin } from 'react-google-login';

function Page() {
  const responseFacebook = async (response) => {
    let fbResponse = await fbLogin(response.accessToken);
    console.log(fbResponse);
    console.log(response);
  };

  const responseGoogle = async (response) => {
    let googleResponse = await googleLogin(response.accessToken);
    console.log(googleResponse);
    console.log(response);
  };
  return (
    <div className="App">
      <h1>Login with Google</h1>
      <GoogleLogin
        clientId="YOUR_GOOGLE_CLIENT_ID"
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </div>
  );
}

export default Page