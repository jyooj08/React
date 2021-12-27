import React, { Component } from 'react';
import styles from './card.module.css';

class Card extends Component {
    ref = React.createRef();

    onChange = (event) => {
        const card = this.props.card;
        switch(event.target.id){
            case 'name':
                card.name = event.target.value; break;
            case 'company':
                card.company = event.target.value; break;
            case 'color':
                card.color = event.target.value; break;
            case 'title':
                card.title = event.target.value; break;
            case 'email':
                card.email = event.target.value; break;
            case 'message':
                card.message = event.target.value; break;
            default:
                break;
        }
        this.props.onChange(card);
    }

    render() {
        const card = this.props.card;
        return (
            <li className={styles.card}>
                <div className={styles.row1}>
                    <input type="text" className={styles.name} placeholder='Name' id='name' onChange={this.onChange} value={card.name}/>
                    <input type="text" className={styles.company} placeholder='Company' id='company' onChange={this.onChange} value={card.company}/>
                    <select name="color" id='color' className={styles.color}  onChange={this.onChange}>
                        <option value="red">Red</option>
                        <option value="gray">Gray</option>
                    </select>
                </div>
                <div className={styles.row2}>
                    <input type="text" className={styles.title} placeholder='Title' id='title' onChange={this.onChange} value={card.title}/>
                    <input type="email" className={styles.email} placeholder='Email' id='email' onChange={this.onChange} value={card.email}/>
                </div>
                <div className={styles.row3}>
                <input type="text" className={styles.message} placeholder='Message' id='message' onChange={this.onChange} value={card.message}/>
                </div>
            </li>
        );
    }
}

export default Card;