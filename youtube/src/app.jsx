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
    this.props.api.mostPopular()
    .then(result => {
      console.log(result.items);
      this.setState({videos: result.items});
    })
    .catch(error => console.log('error', error));
  }

  search = (query) => {
    this.props.api.search(query)
    .then(result => this.setState({videos: result.items}))
    .catch(error => console.log('error', error));
    
    this.setState({mainVideo: null})
  }

  playVideo = (videoId) => {
    this.props.api.video(videoId)
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