import css from './StartContainer.module.scss';

interface StartContainerProps {
  children: React.ReactNode;
  className?: string;
}

const StartContainer: React.FC<StartContainerProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`${css.start_container} ${className}`}>{children}</div>
  );
};

export default StartContainer;
