import React from 'react';

const TitleSettings = ({ props, setProps }) => (
  <>
    <label>
      Level:
      <select
        value={props.level}
        onChange={(e) => setProps({ ...props, level: parseInt(e.target.value) })}
      >
        <option value={1}>h1</option>
        <option value={2}>h2</option>
        <option value={3}>h3</option>
      </select>
    </label>
    <label>
      Text:
      <input
        value={props.text}
        onChange={(e) => setProps({ ...props, text: e.target.value })}
      />
    </label>
  </>
);

export default TitleSettings;
