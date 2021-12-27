import React, { Component } from 'react';
import Cardlist from '../cardlist/cardlist';
import styles from './main.module.css';
import Card from '../../common/card.js';
import PreviewList from '../previewlist/previewlist';
import { onValue, ref, set } from "firebase/database";

class Main extends Component {
    state = {
        cards: []
    }
    db = this.props.db;
    user = this.props.user.uid;
    
    componentDidMount(){
        const cardsRef = ref(this.db, `${this.user}/cards`);
        onValue(cardsRef, _cards => {
            let cards = [];
            const data = _cards.val();
            
            console.log(data);
            
            for(let key in data){
                let card = new Card();
                card.set(key, data[key]);
                cards.push(card);
            }
            cards.push(new Card());
            this.setState({cards});
        });
    }

    logout = () => {
        this.props.logout();
    }

    onChange = (newCard) => {
        console.log('newcard',newCard);
        //database
        if(newCard.isEmpty()){
            set(ref(this.db, `${this.user}/cards/${newCard.id}`), null);
        } else set(ref(this.db, `${this.user}/cards/${newCard.id}`), {
            name: newCard.name,
            company: newCard.company,
            color: newCard.color,
            title: newCard.title,
            email: newCard.email,
            message: newCard.message,
            fileName: newCard.fileName
        });

        let cards = this.state.cards.map(item => {
            if(item.id == newCard.id){
                return newCard;
            }
            return item;
        });
        cards = cards.filter(card => !card.isEmpty());
        cards.push(new Card());
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
                        <PreviewList cards={this.state.cards}/>
                    </section>
                </div>
            </div>
        );
    }
}

export default Main;