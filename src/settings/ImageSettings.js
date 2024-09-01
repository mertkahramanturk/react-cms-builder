import React from 'react';

const ImageSettings = ({ props, setProps }) => (
  <>
    <label>
      Src:
      <input
        value={props.src}
        onChange={(e) => setProps({ ...props, src: e.target.value })}
      />
    </label>
    <label>
      Alt:
      <input
        value={props.alt}
        onChange={(e) => setProps({ ...props, alt: e.target.value })}
      />
    </label>
  </>
);

export default ImageSettings;
