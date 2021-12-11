import React, { Component } from 'react';

class Video extends Component {
    render() {
        const info = this.props.info;

        return (
            <li className='video'>
                <img src={info.thumbnails.default.url} alt="" />
                <span>{info.title}</span>
            </li>
        );
    }
}

export default Video;