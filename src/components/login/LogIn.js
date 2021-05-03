import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './FirebaseConfig';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import './Login.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import google from './btn_google_dark_normal_ios@3x.png';


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(4),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
}

const LogIn = () => {
    const [loggedUser, setLoggedUser] = useContext(UserContext);
    const classes = useStyles();

    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSing = () => {
        firebase.auth()
                .signInWithPopup(googleProvider)
                .then((result) => {
                    /** @type {firebase.auth.OAuthCredential} */
                    
                    const user = result.user;
                    setLoggedUser(user)
                    history.replace(from);
                    // ...
                }).catch((error) => {
                    // Handle Errors here.
                    setLoggedUser(error)
                });
    }
    return (
        <div>
            {/* <Button variant="contained" size="small" color="primary" className={classes.margin}>
            <div className="m-0 p-0"><img className="w-25" src={google} alt=""/></div>
                 <div className="mr-3">Sign in with google</div>
        </Button> */}
        <div className="login">
        <div class="google-btn" onClick={handleGoogleSing}>
                <div class="google-icon-wrapper">
                    <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                </div>
                <p class="btn-text"><b>Sign in with google</b></p>
                </div>
        </div>
        </div>
    );
};

export default LogIn;