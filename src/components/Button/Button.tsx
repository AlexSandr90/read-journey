import css from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'submit' | 'button';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'submit',
  className = '',
}) => {
  return (
    <button type={type} className={`${css.button} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
