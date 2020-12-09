import { GoogleLogin, GoogleLogout } from "react-google-login";
import PropTypes from 'prop-types';

const GoogleButton = ({ handleResponse, isLoggedIn }) => {
    return (
        <>
            { !isLoggedIn ?
                <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_API_KEY}
                    buttonText="Login with Google"
                    onSuccess={handleResponse}
                    onFailure={handleResponse}
                    isSignedIn={true}
                ></GoogleLogin>
                : <GoogleLogout
                    clientId={process.env.REACT_APP_GOOGLE_API_KEY}
                    buttonText="Logout"
                    onLogoutSuccess={handleResponse}
                ></GoogleLogout>
            }
        </>
    );
};

GoogleButton.propTypes = {
    handleResponse: PropTypes.func,
    isLoggedIn: PropTypes.bool,
}

export default GoogleButton;
