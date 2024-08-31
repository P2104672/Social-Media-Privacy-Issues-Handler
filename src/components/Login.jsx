import { GoogleLogin } from 'react-google-login';
const clientId = "544721700557-k663mu7847o4a1bctnuq5jh104qe982h.apps.googleusercontent.com";

function Login() {

    const onSuccess = (res) => {
        console.log("Login Success! Current user: " + res.profile);
    }

    const onFailure = (res) => {
        console.log("Login Failure! Current user: " + res);
    }

    // var accessToken = gapi.auth.getToken().access_token;


    return(
        <div id="signInButton">
            <GoogleLogin 
                clientId={clientId} 
                buttonText='Login' 
                onSuccess={onSuccess} 
                onFailure={onFailure} 
                cookiePolicy={'single_host_origin'} 
                isSignedIn={true} />
        </div>
)}
export default Login;   