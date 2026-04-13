import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'nav' | 'active'; 
  className?: string; 
  type?: 'button' | 'submit' | 'reset';
}

export const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className, 
  type = 'button' 
}: ButtonProps) => {
  return (
    <button 
      type={type}
      onClick={onClick}
      className={`${styles.btn} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};