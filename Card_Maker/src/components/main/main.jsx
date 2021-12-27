import React, { Component } from 'react';
import Cardlist from '../cardlist/cardlist';
import styles from './main.module.css';

class Main extends Component {
    state = {
        cards: [{
            id: Date.now(),
            name: '',
            company: '',
            color: 'red',
            title: '',
            email: '',
            message: ''
        }]
    }

    logout = () => {
        this.props.logout();
    }

    onChange = (newCard) => {
        let cards = this.state.cards.map(item => {
            if(item.id == newCard.id){
                return newCard;
            }
            return item;
        });
        this.setState({cards});
    }
    
    render() {
        return (
            <div>
                <header className={styles.mainHeader}>
                    <h1>Business Card Maker</h1>
                    <button className={styles.logoutBtn} onClick={this.logout}>Log out</button>
                </header>

                <div className={styles.sections}>
                    <section className={styles.listSection}>
                        <h1>Card Maker</h1>
                        <Cardlist 
                        cards={this.state.cards}
                        onChange={this.onChange}/>
                    </section>
                    <section className={styles.previewSection}>
                        <h1>Card Preview</h1>
                    </section>
                </div>
            </div>
        );
    }
}

export default Main;