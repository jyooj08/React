import React, { useEffect, useState } from 'react';
import Cardlist from '../cardlist/cardlist';
import styles from './main.module.css';
import Card from '../../common/card.js';
import PreviewList from '../previewlist/previewlist';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import Header from '../header/header';

function Main ({fb}) {
    const [cards, setCards] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    let user = location.state.uid;
    const auth = getAuth();

    useEffect(() => {
        const currentUser = auth.currentUser;
        if(!currentUser){
            navigate('/');
            return;
        }

        fb.getCardsFromDB(user)
        .then(_cards => setCards(_cards));
        
    },[])

    const onChange = (newCard) => {
        let _cards = cards.map(item => {
            if(item.id === newCard.id){
                return newCard;
            }
            return item;
        });
        
        setCards(_cards);
        fb.setCardInDB(user, newCard);
    }

    const addCard = () => {
        let newCard = new Card();
        let _cards = [...cards, newCard];
        setCards(_cards);
        fb.setCardInDB(user, newCard);
    }

    const deleteCard = (card) => {
        let _cards = cards.filter(c => c.id !== card.id);
        setCards(_cards);
        fb.deleteCardInDB(user, card);
    }
    
    
    return (
        <div>
            <Header fb={fb}/>
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