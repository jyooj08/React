import React, { Component } from 'react';

class Video extends Component {
    playVideo = () => {
        let id = this.props.info.id;
        if(typeof(id) == 'object') id = id.videoId;
        this.props.playVideo(id);
    }

    render() {
        const info = this.props.info.snippet;
        const title = info.title.replaceAll("&#39;", "\'").replaceAll("&quot;", "\"");

        return (
            <li className='video' onClick={this.playVideo}>
                <img src={info.thumbnails.default.url} alt="" />
                <span>{title}</span>
            </li>
        );
    }
}

export default Video;