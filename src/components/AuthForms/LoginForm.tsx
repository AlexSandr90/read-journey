import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../services/validation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import css from './Forms.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';

interface LoginFormInputs {
  email: string;
  password: string;
}

const LoginForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({ resolver: yupResolver(loginSchema) });
  const login = async () => {};

  const inputBaseClasses =
    'w-full px-3 py-2 bg-white border rounded-md outline-none focus:ring-2 focus:ring-blue-500';

  const getInputClassName = (hasError: boolean) =>
    clsx(inputBaseClasses, {
      'border-red-500': hasError,
      'border-gray-300': !hasError,
    });

  return (
    <>
      <form onSubmit={login} className={css.form}>
        <div className={`space-y-2 ${css.form__input_group}`}>
          <input
            {...register('email')}
            placeholder="Email"
            type="text"
            className={`${getInputClassName(!!errors.email)} ${css.form__input}`}
          />

          {errors.email && (
            <span className={`text-sm text-red-500 ${css.error_message}`}>
              {errors.email.message}
            </span>
          )}
        </div>

        <div className={`space-y-2 ${css.form__input_group}`}>
          <input
            {...register('password')}
            placeholder="Password"
            type="text"
            className={`${getInputClassName(!!errors.password)} ${css.form__input}`}
          />

          {errors.password && (
            <span className={`text-sm text-red-500 ${css.error_message}`}>
              {errors.password.message}
            </span>
          )}
        </div>

        <div className={`${css.form__buttons_block} ${css.logon_btns}`}>
          <Button type="submit">Log In</Button>

          <a href="/" className={css.form__link}>
            Don’t have an account?
          </a>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
