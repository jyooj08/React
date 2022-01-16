import React, { Component } from 'react';
import styles from './preview.module.css';

class Preview extends Component {
    render() {
        const card = this.props.card;
        let color;

        switch(card.color){
            case 'LightGray':
                color = styles.gray; break;
            case 'Ivory':
                color = styles.ivory; break;
            case 'PowderBlue':
                color = styles.blue; break;
            case 'LightGreen':
                color = styles.green; break;
            case 'LightPink':
            default:
                color = styles.pink; break;
        }

        return (
            <li className={`${styles.preview} ${color}`}>
                <div >
                    <img className={styles.image} src={card.fileURL} alt="No Image" />
                </div>
                <div className={styles.content}>
                    <h2 className={styles.name}>{card.name}</h2>
                    <span className={styles.company}>{card.company}</span>

                    <div className={styles.line}></div>

                    <span className={styles.title}>{card.title}</span>
                    <span className={styles.email}>{card.email}</span>
                    <span className={styles.message}>{card.message}</span>
                </div>
                

            </li>
        );
    }
}

export default Preview;