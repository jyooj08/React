import React, { Component } from 'react';
import Preview from '../preview/preview';
import styles from './previewlist.module.css';

class PreviewList extends Component {
    render() {
        return (
            <ul className={styles.previewlist}>
               {
                   this.props.cards.map(c => 
                    <Preview key={c.id} card={c}/>)
               } 
            </ul>
        );
    }
}

export default PreviewList;