import React, { Component } from 'react';

class Video extends Component {
    convertText(text){
        text.replaceAll("&#39;", "\'");
        text.replaceAll("&quot;", "\"");
        return text;
    }
    render() {
        const info = this.props.info;
        const title = info.title.replaceAll("&#39;", "\'").replaceAll("&quot;", "\"");

        return (
            <li className='video'>
                <img src={info.thumbnails.default.url} alt="" />
                <span>{title}</span>
            </li>
        );
    }
}

export default Video;