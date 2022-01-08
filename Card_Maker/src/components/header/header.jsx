import { getAuth } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './header.module.css';

const Header = (props) => {
    const auth  = getAuth();
    const navigate = useNavigate();
    const user = auth.currentUser;
    let btnDisplay = user ? styles.show : styles.hide;

    const logout = () => {
        auth.signOut();
        navigate('/');
    }
    
    return <header className={styles.header}>
        <h1 className={styles.text}>Business Card Maker</h1>
        <button className={`${styles.logout} ${btnDisplay}`} onClick={logout}>Log out</button>
    </header>
}

export default Header;