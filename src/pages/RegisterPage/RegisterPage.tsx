import Hero from '../../components/Hero/Hero';
import StartPage from '../../components/StartPage/StartPage';
import Register from '../../components/Register/Register';
import css from './RegisterPage.module.scss';

const RegisterPage = () => {
  return (
    <StartPage className={css.register__page}>
      <Register />
      <Hero />
    </StartPage>
  );
};

export default RegisterPage;
