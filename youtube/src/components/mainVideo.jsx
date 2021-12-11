import React, { Component } from 'react';

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
        // console.log(info);
        console.log("mainvideo", id);
        console.log(typeof(desc));
        return (
            <div className='main-section'>
                <iframe className='main-video' width="560" height="315" src={src} title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                
                <div className="main-desc">
                    {desc}
                </div>
            </div>
        );
    }
}

export default MainVideo;