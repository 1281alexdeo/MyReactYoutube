import React, { Component } from 'react';
import SearchBar from './Components/SearchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './Components/VideoList';
import VideoDetail from './Components/VideoDetail';

import './App.css';

const API_KEY = 'AIzaSyDWDj4jLjWSbvwmp_yjZ-v_hTzdTR88wnI';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      term: '',
      selectedVideo: ''
    };
  }
  componentWillMount() {
    this.OnTermChange();
  }

  onSelectedVideo(video) {
    this.setState({
      selectedVideo: video
    });
  }
  OnTermChange(terms) {
    YTSearch({ key: API_KEY, term: terms }, data => {
      this.setState({
        videos: data,
        term: terms,
        selectedVideo: data[0]
      });
    });
  }
  render() {
    return (
      <div className="App">
        <h3
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontFamily: 'cursive',
            fontSize: 'xx-large',
            marginTop: '20px'
          }}
          className="App-intro">
          YouTube App
        </h3>
        <div key={this.state.videos.etag}>
          <div>
            <SearchBar changeTerm={this.OnTermChange.bind(this)} />
          </div>

          <div className="flex-container">
            <div className="video-detail">
              <VideoDetail video={this.state.selectedVideo} />
            </div>

            <div className="video-list">
              <VideoList
                video={this.state.videos}
                selectedVideo={this.onSelectedVideo.bind(this)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
