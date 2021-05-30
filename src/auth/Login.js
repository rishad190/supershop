import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../App';
import loginBg from '../images/supermarket.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  faGoogle } from '@fortawesome/free-brands-svg-icons';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const history = useHistory();
    const [newUser, setNewUser] = useState(false);

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider).then(function (result) {
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email }
            setLoggedInUser(signedInUser);
            sessionStorage.setItem('user', JSON.stringify(signedInUser))
            storeAuthToken();
        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken);
                history.replace(from);
            }).catch(function (error) {
                console.log(error.errorMessage)
            });
    }

    return (
        <div className="login-page container">
            <div className="row align-items-center" style={{ height: "85vh" }}>
                <div className="col-md-6 shadow p-5">
                    <button className="btn btn-primary" onClick={handleGoogleSignIn}>Sign in</button>
                </div>
                <div className="col-md-6 d-none d-md-block align-self-end pb-5">
                    <img className="img-fluid" src={loginBg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;