import React, { Component } from 'react';
import Video from './video';

class VideoList extends Component {
    state = {

    };

    render() {  
        console.log(this.props.videos[0]);     
        return (<ul className='video-list'>
        {
            this.props.videos.map(v => <Video key={v.id} info={v.snippet}></Video>)
        }      
        </ul>);
        
    }
}

export default VideoList;