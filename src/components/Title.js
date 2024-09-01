import React from 'react';

const Title = ({ level, text }) => {
  const Tag = `h${level}`;

  return <Tag>{text}</Tag>;
};

export default Title;