const Button = ({ type, text, onClick }) => {
  const buttonStyle = {
    primary: { backgroundColor: 'blue', color: 'white' },
    secondary: { backgroundColor: 'gray', color: 'white' },
    outlinePrimary: { border: '1px solid blue', color: 'blue' },
  };

  return (
    <button style={buttonStyle[type]} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;