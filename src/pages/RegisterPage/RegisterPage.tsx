import Logo from '../../components/Header/Logo';
import css from './RegisterPage.module.scss';
import RegisterForm from '../../components/AuthForms/RegisterForm';
import Hero from '../../components/Hero/Hero';

const RegisterPage = () => {
  return (
    <div className={css.register}>
      <div className={css.register_page__section}>
        <Logo />
        <p className={css.register_superman__text}>
          Expand your mind, reading <span>a book</span>
        </p>

        <RegisterForm />
      </div>
      <Hero />
    </div>
  );
};

export default RegisterPage;
