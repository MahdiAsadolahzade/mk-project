import React from 'react';

type Props = {
  type: 'primary' | 'secondary' | 'disabled';
  children: React.ReactNode;
};

const Button = ({ type, children }: Props) => {
  return (
    <button className={`button button--${type}`} disabled={type === 'disabled'}>
      {children}
    </button>
  );
};

export default Button;
