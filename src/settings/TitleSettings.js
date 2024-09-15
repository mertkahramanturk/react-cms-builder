import React from 'react';
import TitleEditor from './TitleEditor';
import 'react-quill/dist/quill.snow.css';



const TitleSettings = ({ props, setProps }) => {

  const handleTextChange = (value) => {
    setProps({ ...props, text: value });
  };

  const handleAlignmentChange = (e) => {
    setProps({ ...props, alignment: e.target.value });
  };


  return (
    <div className='setting-root'>
        <label className='setting-label'>
       <p>Text Content:</p> 
        <TitleEditor
          value={props.text || ''}
          onChange={handleTextChange}
        />
      </label>
      <label className='setting-label'>
     <p> Text Alignment: </p>
        <select value={props.alignment || 'left'} onChange={handleAlignmentChange}>
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>
      </label>
      <label className='setting-label'>
      <p>CSS Class Names: </p> 
        <input
          type="text"
          value={props.classNames || ''}
          onChange={(e) => setProps({ ...props, classNames: e.target.value })}
          placeholder="Custom class goes here!"
        />
      </label>
    </div>
  );
};

export default TitleSettings;
