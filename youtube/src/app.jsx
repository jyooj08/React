import React, { Component } from 'react';
import VideoList from './components/videoList';
import styles from './app.module.css';
import SearchBar from './components/searchBar';
import MainVideo from './components/mainVideo';

class App extends Component {
  state = {
    videos: [],
    mainVideo: null
  }

  componentDidMount(){
    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBxhlhxZzDoUAk9lGMuICMV3JpCrAT98BY", requestOptions)
      .then(response => response.json())
      .then(result => this.setState({videos: result.items}))
      .catch(error => console.log('error', error));
  }

  search = (query) => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="+query+"&key=AIzaSyBxhlhxZzDoUAk9lGMuICMV3JpCrAT98BY", requestOptions)
      .then(response => response.json())
      .then(result => this.setState({videos: result.items}))
      .catch(error => console.log('error', error));
    
    this.setState({mainVideo: null})
  }

  playVideo = (videoId) => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&id="+videoId+"&key=AIzaSyBxhlhxZzDoUAk9lGMuICMV3JpCrAT98BY", requestOptions)
      .then(response => response.json())
      .then(result => this.setState({mainVideo: result.items[0]}))
      .catch(error => console.log('error', error));
  }

  render() {
    return (<>
      <SearchBar search={this.search} />
      <div className={styles.youtubeBody}>
        <MainVideo videoInfo={this.state.mainVideo} />
        <VideoList mainVideo={this.state.mainVideo} videos={this.state.videos} playVideo={this.playVideo}/>
      </div>
      
    </>);
  }
}

export default App;