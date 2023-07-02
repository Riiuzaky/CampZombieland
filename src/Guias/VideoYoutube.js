import React from 'react';
import './VideoYoutube.css';

function YouTubeVideo({ videoId, name, description }) {
  return (
    <div className="video-card">
      <h3 className="video-title">{name}</h3>
      <div className="youtube-video-container">
        <iframe
          className="youtube-video"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className="video-description">{description}</p>
    </div>
  );
}

export default YouTubeVideo;


