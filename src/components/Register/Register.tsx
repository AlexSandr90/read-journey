import RegisterForm from '../AuthForms/RegisterForm';
import Logo from '../Header/Logo';
import StartContainer from '../StartContainer/StartContainer';
import css from './Register.module.scss';

const Register = () => {
  return (
    <StartContainer>
      <Logo />
      <p className={css.register_superman__text}>
        Expand your mind, reading <span>a book</span>
      </p>
      <RegisterForm />
    </StartContainer>
  );
};

export default Register;
