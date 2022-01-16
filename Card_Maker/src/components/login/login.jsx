import React, { useEffect } from 'react';
import styles from './login.module.css';
import { useNavigate } from 'react-router-dom';
import Header from '../header/header';

function Login({fb}) {
    const navigate = useNavigate();
    
    const googleLogin = () => {
        fb.googleLogin(navigate);
    }

    const githubLogin = () => {
        fb.githubLogin(navigate);
    }

    useEffect(() => {
        fb.autoLogin(navigate);
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