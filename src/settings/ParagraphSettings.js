import React from 'react';
import ParagraphComponent from '../components/Paragraph';

const ParagraphSettings = ({ props, setProps }) => {
  const handleContentChange = (content) => {
    setProps({ ...props, content });
  };

  return (
    <div className='setting-root'>
      <label className='setting-label'>
     <p> Content: </p>
        <ParagraphComponent 
          content={props.content} 
          onChange={handleContentChange} 
          mode="edit" 
        />
      </label>
    </div>
  );
};

export default ParagraphSettings;
