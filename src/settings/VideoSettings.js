import React from 'react';

const VideoSettings = ({ props, setProps }) => {
  const handleAlignmentChange = (e) => {
    setProps({ ...props, alignment: e.target.value });
  };

  return (
    <div className='setting-root'>
        <label className='setting-label'>
        <p>Video URL: </p>
        <input
          type="text"
          value={props.src || ''}
          onChange={(e) => setProps({ ...props, src: e.target.value })}
        />
      </label>
      <label className='setting-label'>
        <p>Auto Play: </p>
        <input
          type="checkbox"
          checked={props.autoPlay || false}
          onChange={(e) => setProps({ ...props, autoPlay: e.target.checked })}
        /> YES
      </label>

      <label className='setting-label'>
        <p>Alignment: </p>
        <select value={props.alignment || 'center'} onChange={handleAlignmentChange}>
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>
      </label>
      <label className='setting-label'>
        <p>Border Radius:</p>
        <input
          type="number"
          value={props.borderRadius || 0}
          onChange={(e) => setProps({ ...props, borderRadius: e.target.value })}
        />px
      </label>
    </div>
  );
};

export default VideoSettings;
