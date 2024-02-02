import { FormWrapper } from 'components/FormWrapper';
import { Form } from 'components/Form';
import { Input } from 'components/Input';
import { FormMessage } from 'components/FormMessage';
import { Button } from 'components/Button';
import { Link, Navigate } from 'react-router-dom';
import useAuth from 'hooks/useAuth.ts';
import useLoginForm from './useLoginForm.ts';

export function LoginForm() {
  const { isAuth } = useAuth();
  const {
    register,
    handleSubmit,
    errors,
    error,
    onSubmitLoginForm
  } = useLoginForm();

  if (isAuth) return <Navigate to="/" />;

  return (
    <FormWrapper className="auth__wrapper" title="Login">
      <Form
        className="auth__form"
        onSubmit={handleSubmit(onSubmitLoginForm)}
      >
        <div className="form-group">
          <Input
            className="form-group__input"
            type="email"
            placeholder="Email"
            register={register('email', { required: true })}
          />
          {errors.email && (
            <FormMessage className="form-group__msg">Can't be empty</FormMessage>
          )}
        </div>
        <div className="form-group">
          <Input
            className="form-group__input"
            type="password"
            placeholder="Password"
            register={register('password', { required: true })}
            autoComplete='password'
          />
          {errors.password && (
            <FormMessage className="form-group__msg">Can't be empty</FormMessage>
          )}
        </div>
        <Button className="auth__btn" type="submit">
          Login to your account
        </Button>
      </Form>
      {error && <FormMessage>{error}</FormMessage>}
      <p className="auth__sign">
        Don’t have an account? <Link to="/register">Sign Up</Link>
      </p>
    </FormWrapper>
  )
}