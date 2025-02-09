import LoginForm from '../AuthForms/LoginForm';
import Logo from '../Header/Logo';
import StartContainer from '../StartContainer/StartContainer';
import css from './Login.module.scss';

const Login = () => {
  return (
    <StartContainer>
      <Logo />
      <p className={css.login_superman__text}>
        Expand your mind, reading <span>a book</span>
      </p>

      <LoginForm />
    </StartContainer>
  );
};

export default Login;
