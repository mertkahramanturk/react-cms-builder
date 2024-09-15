import React from 'react';

const ButtonSettings = ({ props, setProps }) => {

  
  const handleAlignmentChange = (e) => {
    setProps({ ...props, alignment: e.target.value });
  };

  return (
    <div className='setting-root'>
        <label className='setting-label'>
        <p>Text:</p>
      <input
        type='text'
        value={props.text}
        onChange={(e) => setProps({ ...props, text: e.target.value })}
      />
    </label>
    <label className='setting-label'>
    <p>Type:</p>  
      <select
        value={props.type}
        onChange={(e) => setProps({ ...props, type: e.target.value })}
      >
        <option value="primary">Primary</option>
        <option value="outline">Outline</option>
      </select>
    </label>
        <label className='setting-label'>
     <p>Background Color:</p>  
      <input
        type="color"
        value={props.backgroundColor || '#0000ff'} 
        onChange={(e) => setProps({ ...props, backgroundColor: e.target.value })}
      />
    </label>
        <label className='setting-label'>
      <p>Border Radius (px):</p>
      <input
        type="number"
        value={props.borderRadius || 0}
        onChange={(e) => setProps({ ...props, borderRadius: e.target.value })}
      />
    </label>
        <label className='setting-label'>
      <p>Font Size (px): </p>
      <input
        type="number"
        value={props.fontSize || 16}
        onChange={(e) => setProps({ ...props, fontSize: e.target.value })}
      />
    </label>
        <label className='setting-label'>
     <p>Redirect URL:</p>
      <input
        type="url"
        value={props.url || ''}
        onChange={(e) => setProps({ ...props, url: e.target.value })}
      />
    </label>
        <label className='setting-label'>
        <p>Text Alignment: </p>
        <select value={props.alignment || 'left'} onChange={handleAlignmentChange}>
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>
      </label>
      <br />
        <label className='setting-label'></label>
  </div>
  )

}
export default ButtonSettings