import React from 'react';
import 'react-quill/dist/quill.snow.css';
import ParagraphEditor from './ParagraphEditor';



const ParagraphSettings = ({ props, setProps }) => {

  const handleTextChange = (value) => {
    setProps({ ...props, text: value });
  };

  const handleAlignmentChange = (e) => {
    setProps({ ...props, alignment: e.target.value });
  };


  return (
    <div className='setting-root'>
    <label className='setting-label'>
    <p> Paragraph Content:</p>
        <ParagraphEditor
          value={props.text || ''}
          onChange={handleTextChange}
        />
      </label>
      <label className='setting-label'>
      <p> Paragraph Alignment: </p>
        <select value={props.alignment || 'left'} onChange={handleAlignmentChange}>
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>
      </label>
      <label className='setting-label'>
      <p> CSS Class Names:</p>
        <input
          type="textarea"
          value={props.classNames || ''}
          onChange={(e) => setProps({ ...props, classNames: e.target.value })}
          placeholder="Custom class goes here!"
        />
      </label>
    </div>
  );
};

export default ParagraphSettings;
