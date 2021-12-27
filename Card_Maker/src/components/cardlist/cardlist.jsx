import React, { Component } from 'react';
import Card from '../card/card';
import styles from './cardlist.module.css';

class Cardlist extends Component {
    onChange = (card) => {
        this.props.onChange(card);
    }

    render() {
        return (
            <ul className={styles.cardlist}>
                {
                    this.props.cards.map(c => 
                        <Card card={c} key={c.id}
                        onChange={this.onChange}/>
                    )
                }
            </ul>
        );
    }
}

export default Cardlist;