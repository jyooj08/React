import React, { Component } from 'react';
import Video from './video';

class VideoList extends Component {
    state = {

    };

    render() { 
        return (<ul className='video-list'>
        {
            this.props.videos.map(v => <Video key={v.etag} info={v.snippet}></Video>)
        }      
        </ul>);
        
    }
}

export default VideoList;