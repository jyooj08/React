import React, { Component } from 'react';

class Video extends Component {
    render() {
        return (
            <div className='video'>
                {this.props.title}
            </div>
        );
    }
}

export default Video;