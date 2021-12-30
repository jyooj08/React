import React from 'react';
import CardAddForm from '../cardAddForm/cardAddForm';
import CardEditForm from '../cardEditForm/cardEditForm';
import styles from './editor.module.css';

const Editor = ({cards, addCard}) => (
        <section className={styles.editor}>
            <h1 className={styles.title}>Card Maker</h1>
            <ul>
            {
               cards.map(card => (<CardEditForm key={card.id} card={card} />))
            }
            <CardAddForm onAdd={addCard}/>
            </ul>
            
        </section>
    );

export default Editor;