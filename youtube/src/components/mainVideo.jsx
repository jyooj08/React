import React, { Component } from 'react';
import styles from '../app.module.css';

class MainVideo extends Component {
    render() {
        const info = this.props.videoInfo;
        
        if(info == null){
            return (<></>);
        }
        
        let id = info.id;
        if(typeof(id) == 'object') id = id.videoId;
        let src = "https://www.youtube.com/embed/"+id;
        let desc = info.snippet.description;

        return (
            <div className={styles.mainSection}>
                <iframe className={styles.mainVideo} src={src} title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                
                <pre className={styles.mainDesc}>
                    {desc}
                </pre>
            </div>
        );
    }
}

export default MainVideo;