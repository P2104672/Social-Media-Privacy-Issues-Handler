import { GoogleLogout } from "react-google-login";

const clientId = "544721700557-k663mu7847o4a1bctnuq5jh104qe982h.apps.googleusercontent.com";

function Logout() {
    const onSuccess = () => {
        console.log("Log out Successfully");

    }

    return (
        <div id = "signOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText={"Logout"}
                onLogoutSuccess={onSuccess}
                />
        </div>

    )
}
export default Logout;