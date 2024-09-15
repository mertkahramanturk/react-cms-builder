import React from 'react';

const ImageComponent = ({ src, alt, objectFit = 'fill', objectPosition = 'center', borderRadius = 0, classNames = '' }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={classNames}  
      style={{
        maxWidth: '100%',
        objectFit: objectFit,
        objectPosition: objectPosition,
        borderRadius: `${borderRadius}px` 
      }}
    />
  );
};

export default ImageComponent;
