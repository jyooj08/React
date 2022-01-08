import React, { useEffect } from 'react';
import styles from './login.module.css';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import Header from '../header/header';

function Login(props) {
    const navigate = useNavigate();
    
    const googleLogin = () => {
        props.googleLogin();
    }

    const githubLogin = () => {
        props.githubLogin();
    }

    useEffect(() => {
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
            <Header/>
            <h1>Login</h1> 
            <button className={styles.google} onClick={googleLogin}>Google</button>
            <button className={styles.github} onClick={githubLogin}>GitHub</button>
        </section>
    );
}

export default Login;