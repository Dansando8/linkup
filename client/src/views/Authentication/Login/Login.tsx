import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import ButtonLarge from '../../../components/Form/ButtonLarge/ButtonLarge';
import HeaderReturn from '../../../components/HeaderReturn/HeaderReturn';
import { InputTextField } from '../../../components/Form/InputTextField/InputTextField';
import { User } from '../../../utilities/types/User';
import './login.css';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: User) => {
    console.log(data);
  };
  return (
    <div>
      <HeaderReturn
        text="Log in"
      />
      <div className="login__container">
        <form
          id="test"
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputTextField
            type="text"
            label="Email"
            errorMessage={errors.email?.message}
            {...register('email', {
              required: 'This field is required',
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'Please enter valid E-mail',
              },
            })}
          />

          <InputTextField
            type="password"
            label="Password"
            errorMessage={errors.password?.message}
            {...register('password', {
              required: 'This field is required',
              minLength: {
                value: 8,
                message: 'Minimun length 8 characters',
              },
            })}
          />
          <Link to="/events">
            <ButtonLarge
              type="submit"
              value="Log in"
              style="fill"
            />
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
