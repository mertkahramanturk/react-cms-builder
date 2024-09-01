import React from 'react';

const TextSettings = ({ props, setProps }) => (
  <>
    <label>
      Content:
      <input
        value={props.content}
        onChange={(e) => setProps({ ...props, content: e.target.value })}
      />
    </label>
  </>
);

export default TextSettings;
