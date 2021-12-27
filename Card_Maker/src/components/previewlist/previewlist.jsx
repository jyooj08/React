import React, { Component } from 'react';
import Preview from '../preview/preview';
import styles from './previewlist.module.css';

class PreviewList extends Component {
    render() {
        return (
            <ul className={styles.previewlist}>
               {
                   this.props.cards.map(c => {
                       if(!c.isEmpty()) return <Preview key={c.id} card={c}/>;
                       return null;
                   })
               } 
            </ul>
        );
    }
}

export default PreviewList;