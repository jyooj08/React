import React, { useEffect, useState } from 'react';
import Cardlist from '../cardlist/cardlist';
import styles from './main.module.css';
import Card from '../../common/card.js';
import PreviewList from '../previewlist/previewlist';
import { onValue, ref, set } from "firebase/database";
import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import Header from '../header/header';

function Main (props) {
    const [cards, setCards] = useState([]);
    const db = props.db;
    const navigate = useNavigate();
    const location = useLocation();
    let user;
    const auth = getAuth();

    useEffect(() => {
        const currentUser = auth.currentUser;
        if(!currentUser){
            navigate('/');
            return;
        }

        user = location.state.uid;
        const cardsRef = ref(db, `${user}/cards`);
        onValue(cardsRef, _cards => {
            let cards2 = [];
            const data = _cards.val();
            
            for(let key in data){
                let card = new Card();
                card.set(key, data[key]);
                cards2.push(card);
            }
            
            setCards(cards2);
        });
        
    },[])

    const onChange = (newCard) => {
        //database
        set(ref(db, `${user}/cards/${newCard.id}`), {
            name: newCard.name,
            company: newCard.company,
            color: newCard.color,
            title: newCard.title,
            email: newCard.email,
            message: newCard.message,
            fileName: newCard.fileName
        });

        let _cards = cards.map(item => {
            if(item.id === newCard.id){
                return newCard;
            }
            return item;
        });
        _cards = _cards.filter(card => !card.isEmpty());
        setCards(_cards);
    }

    const addCard = () => {
        let newCard = new Card();
        let _cards = [...cards, newCard];
        setCards(_cards);
        set(ref(db, `${user}/cards/${newCard.id}`), {
            name: newCard.name,
            company: newCard.company,
            color: newCard.color,
            title: newCard.title,
            email: newCard.email,
            message: newCard.message,
            fileName: newCard.fileName
        });
    }

    const deleteCard = (card) => {
        
        set(ref(db, `${user}/cards/${card.id}`), null);
        let _cards = cards.filter(c => c.id !== card.id);
        setCards(_cards);
    }
    
    
    return (
        <div>
            <Header/>
            <div className={styles.sections}>
                <section className={styles.listSection}>
                    <h1>Card Maker</h1>
                    <Cardlist 
                    cards={cards}
                    onChange={onChange}
                    addCard={addCard}
                    deleteCard={deleteCard}/>
                </section>
                <section className={styles.previewSection}>
                    <h1>Card Preview</h1>
                    <PreviewList cards={cards}/>
                </section>
            </div>
        </div>
    );
}

export default Main;