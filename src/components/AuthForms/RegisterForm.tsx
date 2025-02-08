import css from './Forms.module.scss';
import { registerSchema } from '../../services/validation';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

interface RegisterFormInputs {
  name: string;
  email: string;
  password: string;
}

const RegisterForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormInputs) => {
    try {
      const response = await fetch('api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Something went wrong');
      }

      localStorage.setItem('token', result.token);
      navigate('/recommended');
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Something went wrong');

      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };

  const inputBaseClasses =
    'w-full px-3 py-2 bg-white border rounded-md outline-none focus:ring-2 focus:ring-blue-500';

  const getInputClassName = (hasError: boolean) =>
    clsx(inputBaseClasses, {
      'border-red-500': hasError,
      'border-gray-300': !hasError,
    });

  const errorNotificationClassName = clsx(
    'mt-4 p-3',
    'text-sm text-white',
    'bg-red-500 rounded-md',
  );

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={` ${css.register_form}`}
      >
        <div className={`space-y-2 ${css.register_form__input_group}`}>
          <input
            {...register('name')}
            placeholder="Name"
            type="text"
            className={`${getInputClassName(!!errors.name)} ${css.register_form__input}`}
          />

          {errors.name && (
            <span className={`text-sm text-red-500 ${css.error_message}`}>
              {errors.name.message}
            </span>
          )}
        </div>

        <div className={`space-y-2 ${css.register_form__input_group}`}>
          <input
            {...register('email')}
            placeholder="Email"
            type="text"
            className={`${getInputClassName(!!errors.email)} ${css.register_form__input}`}
          />

          {errors.email && (
            <span className={`text-sm text-red-500 ${css.error_message}`}>
              {errors.email.message}
            </span>
          )}
        </div>

        <div className={`space-y-2 ${css.register_form__input_group}`}>
          <input
            {...register('password')}
            placeholder="Password"
            type="text"
            className={`${getInputClassName(!!errors.password)} ${css.register_form__input}`}
          />

          {errors.password && (
            <span className={`text-sm text-red-500 ${css.error_message}`}>
              {errors.password.message}
            </span>
          )}
        </div>

        <div className={css.register_form__buttons_block}>
          <button type="submit" className={css.register_form__submit_btn}>
            Registration
          </button>

          <a href="/" className={css.register_form__link}>
            Already have an account?
          </a>
        </div>
      </form>
      {error && <div className={errorNotificationClassName}>{error}</div>}
    </>
  );
};

export default RegisterForm;
