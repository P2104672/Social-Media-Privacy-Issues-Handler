
import { GoogleLogin } from 'react-google-login';

const clientId = "544721700557-k663mu7847o4a1bctnuq5jh104qe982h.apps.googleusercontent.com";

function Login() {

    const onSuccess = (res) =>{
        console.log("Login success! Current user: " + res.profileeObj);
    }

    const onFailure = (res) =>{
        console.log("Login failure! res: ", res);
    }
        
    return(
        <div id="SignInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText='Sign-in with Google Login'
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
                />
        </div>
    )

}

export default Login;