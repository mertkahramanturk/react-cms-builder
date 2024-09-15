import React from 'react';

const Banner = ({ appearance, minHeight, backgroundColor, backgroundImage, backgroundPosition, backgroundSize, messageText, alignment }) => {
    console.log(minHeight)
  const bannerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: alignment || 'center',
    height: `${minHeight}px`,
    backgroundColor: backgroundColor,
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
    backgroundPosition: backgroundPosition,
    backgroundSize: backgroundSize,
  };

  return (
    <div style={bannerStyle} className={`banner-${appearance}`}>
      <div className="banner-content">
        <p>{messageText}</p>
      </div>
    </div>
  );
};

export default Banner;
