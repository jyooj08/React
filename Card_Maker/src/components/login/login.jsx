import React, { Component, useEffect } from 'react';
import styles from './login.module.css';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useLocation, useNavigate } from 'react-router-dom';

function Login(props) {
    const location = useLocation();
    const navigate = useNavigate();
    
    const googleLogin = () => {
        props.googleLogin();
    }

    const githubLogin = () => {
        props.githubLogin();
    }

    useEffect(() => {
        console.log('login mount');
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if(user){
                navigate("/main", {state: {
                    uid: user.uid
                }});
            }
        })
    })

    return (
        <section className={styles.loginSection}>
            <header className={styles.loginHeader}>Business Card Maker</header>
            <h1>Login</h1> 
            <button className={styles.google} onClick={googleLogin}>Google</button>
            <button className={styles.github} onClick={githubLogin}>GitHub</button>
        </section>
    );
}

export default Login;