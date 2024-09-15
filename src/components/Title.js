import React from 'react';

const TextComponent = ({ text, classNames = '', alignment = 'left' }) => {
  return (
    <div
    className={classNames}
    style={{textAlign: alignment, wordBreak :'break-word'}}
    dangerouslySetInnerHTML={{ __html: text }} 
    />
  );
};

export default React.memo(TextComponent);
