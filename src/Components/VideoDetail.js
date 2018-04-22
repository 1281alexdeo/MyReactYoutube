import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>loading...</div>;
  }

  const id = video.id.videoId;
  return (
    <div>
      <div>
        <div className="video-container ">
          <iframe
            width="553"
            height="380"
            src={`//www.youtube.com/embed/${id}`}
            frameBorder="0"
            allowFullScreen
          />
        </div>
        <div className="details left">
          <div
            style={{
              margin: '11px auto',
              fontSize: ' large'
            }}>
            <b> {video.snippet.title} </b>
          </div>
          <div>{video.snippet.description}</div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
