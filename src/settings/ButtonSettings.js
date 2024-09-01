import React from 'react';

const ButtonSettings = ({ props, setProps }) => (
  <>
    <label>
      Text:
      <input
        value={props.text}
        onChange={(e) => setProps({ ...props, text: e.target.value })}
      />
    </label>
    <label>
      Type:
      <select
        value={props.type}
        onChange={(e) => setProps({ ...props, type: e.target.value })}
      >
        <option value="primary">Primary</option>
        <option value="secondary">Secondary</option>
        <option value="outline-primary">Outline Primary</option>
      </select>
    </label>
  </>
);

export default ButtonSettings;
