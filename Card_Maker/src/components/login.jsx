import React, { Component } from 'react';
import styles from './login.module.css';

class Login extends Component {
    render() {
        return (
            <section>
                <header>Business Card Maker</header>
                <h1>Login</h1> 
                <button className={styles.google}>Google</button>
                <button className={styles.github}>GitHub</button>
            </section>
        );
    }
}

export default Login;