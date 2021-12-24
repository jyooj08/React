import React, { Component } from 'react';
import styles from './main.module.css';

class Main extends Component {
    logout = () => {
        this.props.logout();
    }
    
    render() {
        return (
            <div>
                <header className={styles.mainHeader}>
                    <h1>Business Card Maker</h1>
                    <button className={styles.logoutBtn} onClick={this.logout}>Log out</button>
                </header>
                <h1>{this.props.user.uid}</h1>
                <h1>{this.props.user.email}</h1>
            </div>
        );
    }
}

export default Main;