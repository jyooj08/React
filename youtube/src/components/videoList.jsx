import React, { Component } from 'react';
import Video from './video';

class VideoList extends Component {
    state = {

    };

    render() {       
        return (<>
        {
            this.props.videos.map(v => <Video key={v.id} title={v.snippet.title}></Video>)
        }      
        </>);
        
    }
}

export default VideoList;