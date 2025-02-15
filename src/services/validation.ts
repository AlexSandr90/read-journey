import * as yup from 'yup';

const mainSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .required('Email is required')
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Email format is invalid'),
  password: yup
    .string()
    .required('Password is required')
    .min(7, 'Password must be at least 7 characters'),
});

export const registerSchema = mainSchema.pick(['name', 'email', 'password']);

export const loginSchema = mainSchema.pick(['email', 'password']);
