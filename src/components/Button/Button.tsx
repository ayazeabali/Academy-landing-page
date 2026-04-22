import { Link } from "react-router-dom";
import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "nav" | "active";
  className?: string;
  type?: "button" | "submit" | "reset";
  to?: string;        
  href?: string;     
}

export const Button = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  to,
  href
}: ButtonProps) => {

  const classes = `${styles.btn} ${styles[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};