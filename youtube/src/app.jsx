import React, { Component } from 'react';
import VideoList from './components/videoList';
import './app.css';
import SearchBar from './components/searchBar';

class App extends Component {
  state = {
    videos: []
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
    
  }

  render() {
    return (<>
      <SearchBar search={this.search} />
      <VideoList videos={this.state.videos}/>
    </>);
  }
}

export default App;