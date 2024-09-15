import React from 'react';

const VideoComponent = ({ src, title = 'Video', classNames = '', borderRadius = 0, autoPlay = false,  alignment = 'center' }) => {
  
  const isHosted = (src) => {
    return src.includes('youtube.com') || src.includes('youtu.be') || src.includes('vimeo.com');
  };

  const getVideoEmbedUrl = (src) => {
    if (src.includes('youtube.com') || src.includes('youtu.be')) {
      const videoId = src.split('v=')[1] || src.split('/').pop();
      return `https://www.youtube.com/embed/${videoId}${autoPlay ? '?autoplay=1' : ''}`;
    } else if (src.includes('vimeo.com')) {
      const videoId = src.split('/').pop();
      return `https://player.vimeo.com/video/${videoId}${autoPlay ? '?autoplay=1' : ''}`;
    }
    return src;
  };

  return (
    <div
      className="pagebuilder-video-inner"
      data-element="inner"
      data-pb-style="P1CJM3X"
      style={{ textAlign: alignment }}
    >
      <div
        className="pagebuilder-video-wrapper"
        data-element="wrapper"
        data-pb-style="BYQD7D8"
        style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
      >
        <div className="pagebuilder-video-container">
          {isHosted(src) ? (
            <iframe
              frameBorder="0"
              allowFullScreen
              title={title}
              className={classNames}
              src={getVideoEmbedUrl(src)}
              style={{
                width: '100%',
                height: '315px',
                borderRadius: `${borderRadius}px`,
              }}
              tabIndex="0"
              data-element="video"
            />
          ) : (
            <div className='place-holder'>Click and upload video here !</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(VideoComponent);
