import { Link } from 'react-router-dom';
import { Logo } from 'assets/svg/Logo.tsx';
import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { Form } from 'components/Form';
import { FormWrapper } from 'components/FormWrapper';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmitLoginForm: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="auth">
      <div className="auth__container">
        <Logo className="auth__logo"/>
        <FormWrapper className='auth__wrapper' title='Login'>
          <Form className='auth__form' onSubmit={handleSubmit(onSubmitLoginForm)}>
            <div className='form-group'>
              <Input className='form-group__input' type='email' placeholder='Email password' register={register('email', { required: true })} />
              {errors.email && <span className='form-group__msg body-s  '>Can't be empty</span>}
            </div>
            <div className='form-group'>
              <Input className='form-group__input' type='password' placeholder='Password' register={register('password', { required: true })} />
              {errors.password && <span className='form-group__msg body-s'>Can't be empty</span>}
            </div>
            <Button className='auth__btn' type='submit'>Login to your account</Button>
          </Form>
          <p className='auth__sign'>Don’t have an account? <Link to="/register">Sign Up</Link></p>
        </FormWrapper>
      </div>
    </div>
  );
}
