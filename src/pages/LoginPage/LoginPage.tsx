import Hero from '../../components/Hero/Hero';
import Login from '../../components/Login/Login';
import StartPage from '../../components/StartPage/StartPage';
import css from './LoginPage.module.scss';

const LoginPage = () => {
  return (
    <StartPage className={css.login}>
      <Login />
      <Hero />
    </StartPage>
  );
};

export default LoginPage;
