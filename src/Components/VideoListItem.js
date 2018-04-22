import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class VideoListItem extends Component {
  constructor(props) {
    // selectedVideo();
    super(props);
    this.state = {
      selectedVideo: this.props.video
    };
  }

  Clicked(e) {
    this.setState(
      {
        selectedVideo: e
      },
      this.props.selectedVideo(this.state.selectedVideo)
    );
  }
  render() {
    return (
      <div>
        <div>
          <Link to="" onClick={this.Clicked.bind(this, this.props.video)}>
            <div
              className="card horizontal Card-container collection-item "
              style={{
                display: 'flex',
                margin: '10px'
              }}>
              <div className="card-image" style={{ display: 'block' }}>
                <img
                  style={{ height: '100%', width: '100%' }}
                  src={this.props.video.snippet.thumbnails.medium.url}
                  alt="video_image"
                />
              </div>

              <div className="C-content" style={{ flex: 4 }}>
                <div
                  className="card-content"
                  style={{
                    padding: '10px',
                    paddingRight: '0px',
                    color: 'black'
                  }}>
                  <p
                    style={{
                      fontWeight: 'bold'
                    }}>
                    {this.props.video.snippet.title}
                  </p>
                  <p>{this.props.video.snippet.channelTitle}</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default VideoListItem;
