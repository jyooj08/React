import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './header.module.css';

const Header = ({fb}) => {
    const navigate = useNavigate();

    const logout = () => {
        fb.logout(navigate);
    }
    
    return <header className={styles.header}>
        <h1 className={styles.text}>Business Card Maker</h1>
        {
            fb && <button className={styles.logout} onClick={logout}>Log out</button>
        }
    </header>
}

export default Header;