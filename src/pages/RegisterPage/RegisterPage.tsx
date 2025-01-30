import css from './RegisterPage.module.scss';

const RegisterPage = () => {
  return (
    <div className={css.register}>
      <div className={css.register_page__section}>Form</div>
      <div className={css.register_page__section}>Hero</div>
    </div>
  );
};

export default RegisterPage;
