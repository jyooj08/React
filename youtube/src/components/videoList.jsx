import React, { Component } from 'react';
import Video from './video';

class VideoList extends Component {
    playVideo = (videoId) => {
        this.props.playVideo(videoId);
    }

    render() { 
        return (<ul className='video-list'>
        {
            this.props.videos.map(v => <Video key={v.etag} info={v} playVideo={this.playVideo}></Video>)
        }      
        </ul>);
        
    }
}

export default VideoList;