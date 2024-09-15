import React, { useState } from 'react';

const Button = ({ type = 'primary', text, backgroundColor, borderRadius, fontSize, url, alignment }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const defaultButtonStyle = {
    primary: {
      default: { backgroundColor: backgroundColor || '#0091ff', color: 'white', border: `1px solid ${backgroundColor || '#0091ff'}` },
      hover: { backgroundColor: 'white', color: backgroundColor || '#0091ff', border: `1px solid ${backgroundColor || '#0091ff'}` },
    },
    outline: {
      default: { backgroundColor: 'transparent', color: backgroundColor || '#0091ff', border: `1px solid ${backgroundColor || '#0091ff'}` },
      hover: { backgroundColor: backgroundColor || '#0091ff', color: 'white', border: `1px solid ${backgroundColor || '#0091ff'}` },
    },
  };
  const getButtonStyle = (buttonType) => {

    if (!defaultButtonStyle[buttonType]) {
      console.error(`Unsupported button type: ${buttonType}`);
      return defaultButtonStyle.primary;
    }
    return defaultButtonStyle[buttonType];
  };

  const buttonStyle = {
    ...getButtonStyle(type).default,
    ...(isHovered ? getButtonStyle(type).hover : {}),
    borderRadius: borderRadius ? `${borderRadius}px` : '4px',
    fontSize: fontSize ? `${fontSize}px` : '16px',
    padding: '10px 20px',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
  };

  const handleClick = () => {
    if (url) {
      window.location.href = url;
    }
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: alignment === 'left' ? 'flex-start' : alignment === 'right' ? 'flex-end' : 'center',
  };

  return (
    <div style={containerStyle}>
      <button
        style={buttonStyle}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
