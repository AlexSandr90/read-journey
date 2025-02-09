import css from './StartPage.module.scss';

interface StartPageProps {
  children: React.ReactNode;
  className?: string;
}

const StartPage: React.FC<StartPageProps> = ({ children, className = '' }) => {
  return <div className={`${css.start__page_wrap} ${className}`}>{children}</div>;
};

export default StartPage;
