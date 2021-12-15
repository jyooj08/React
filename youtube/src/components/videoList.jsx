import React, { Component } from 'react';
import Video from './video';
import styles from '../app.module.css';

class VideoList extends Component {
    playVideo = (videoId) => {
        this.props.playVideo(videoId);
    }

    render() { 
        return (<ul className={styles.videoList}>
        {
            this.props.videos.map(v => <Video key={v.etag} info={v} playVideo={this.playVideo} mainVideo={this.props.mainVideo}></Video>)
        }      
        </ul>);
        
    }
}

export default VideoList;