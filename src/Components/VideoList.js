import React from 'react';
import { Link, Route } from 'react-router-dom';
import VideoListItem from './VideoListItem';

const VideoList = props => {
  const { video } = props.video;
  const videos = props.video.map(video => {
    return (
      <div key={video.id.videoId}>
        <Link to="" className="collection-item">
          <VideoListItem video={video} selectedVideo={props.selectedVideo} />
        </Link>
      </div>
    );
  });

  return <div>{videos}</div>;
};

export default VideoList;
