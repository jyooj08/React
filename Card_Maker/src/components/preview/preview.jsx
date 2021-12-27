import { Image, Transformation } from 'cloudinary-react';
import React, { Component } from 'react';
import styles from './preview.module.css';

class Preview extends Component {
    render() {
        const card = this.props.card;
        let color;

        switch(card.color){
            case 'gray':
                color = styles.gray; break;
            case 'red':
            default:
                color = styles.red; break;
        }

        return (
            <li className={`${styles.preview} ${color}`}>
                <div >
                    <Image className={styles.image} 
                    cloudName="dlizcmiiv" 
                    publicId={`cardMaker/${card.fileName}`}></Image>
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