import React from 'react';

const ImageComponent = ({ src, alt }) => {
  return <img src={src} alt={alt} style={{ maxWidth: '100%' }} />;
};

export default ImageComponent;
