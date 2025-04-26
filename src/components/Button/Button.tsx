import React from 'react';

import './Button.css';

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  onClick,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Prevent default button behavior
    event.preventDefault();
    
    // Call the onClick handler if provided
    if (onClick) {
      onClick();
    }
  };
  
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      onClick={handleClick}
      {...props}
    >
      {label}
    </button>
  );
};
