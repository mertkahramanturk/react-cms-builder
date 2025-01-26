import React from 'react';

const ImageSettings = ({ props, setProps }) => (
  <div className='setting-root'>
      <label className='setting-label'>
      <p>Src: </p>
      <input
        type="text"
        value={props.src}
        onChange={(e) => setProps({ ...props, src: e.target.value })}
      />
    </label>
      <label className='setting-label'>
     <p>Alt: </p>
      <input
        type="text"
        value={props.alt}
        onChange={(e) => setProps({ ...props, alt: e.target.value })}
      />
    </label>

    <label className='setting-label'>
    <p> Object Fit: </p>
      <select
        value={props.objectFit || 'fill'}
        onChange={(e) => setProps({ ...props, objectFit: e.target.value })}
      >
        <option value="fill">Fill</option>
        <option value="contain">Contain</option>
        <option value="cover">Cover</option>
        <option value="none">None</option>
        <option value="scale-down">Scale Down</option>
      </select>
    </label>

    <label className='setting-label'>
    <p> Object Position:</p> 
      <select
        value={props.objectPosition || 'center'}
        onChange={(e) => setProps({ ...props, objectPosition: e.target.value })}
      >
        <option value="center">Center</option>
        <option value="top">Top</option>
        <option value="bottom">Bottom</option>
        <option value="left">Left</option>
        <option value="right">Right</option>
      </select>
    </label>

    <label className='setting-label'>
    <p>Border Radius: </p>
      <input
        type="text"
        value={props.borderRadius}
        onChange={(e) => setProps({ ...props, borderRadius: e.target.value })}
        placeholder="Example value: 10px (please read a (px, rem, em...)"
      />
    </label>
    <label className='setting-label'>
    <p>Width: </p>
      <input
        type="text"
        value={props.width}
        onChange={(e) => setProps({ ...props, width: e.target.value })}
        placeholder="Example value: 100% (please read a (%,px...)"
      />
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

export default ImageSettings;
