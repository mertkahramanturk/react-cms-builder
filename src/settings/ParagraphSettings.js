import React from 'react';
import ParagraphComponent from '../components/Paragraph';

const ParagraphSettings = ({ props, setProps }) => {
  const handleContentChange = (content) => {
    setProps({ ...props, content });
  };

  return (
    <>
      <label>
        Content:
        <ParagraphComponent 
          content={props.content} 
          onChange={handleContentChange} 
          mode="edit" 
        />
      </label>
    </>
  );
};

export default ParagraphSettings;
