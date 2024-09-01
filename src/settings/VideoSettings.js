import React from 'react';

const VideoSettings = ({ props, setProps }) => (
  <>
    <label>
      Src:
      <input
        value={props.src}
        onChange={(e) => setProps({ ...props, src: e.target.value })}
      />
    </label>
    <label>
      Controls:
      <input
        type="checkbox"
        checked={props.controls}
        onChange={(e) => setProps({ ...props, controls: e.target.checked })}
      />
    </label>
  </>
);

export default VideoSettings;
