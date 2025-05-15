import React from 'react';

const Button: React.FC<{ onClick: (event: React.MouseEvent<HTMLButtonElement>) => void }> = ({ onClick }) => {
  return <button onClick={onClick}>hello</button>;
};

export default Button;
