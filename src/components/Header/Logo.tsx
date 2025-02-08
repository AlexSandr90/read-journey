import LogoImg from '../../images/LogoImg';
import css from './Header.module.scss';

const Logo = () => {
  return (
    <a className={css.logo_block} href="/">
      <LogoImg className={css.logo} />
      <span className={css.logo_text}>read journey</span>
    </a>
  );
};

export default Logo;
