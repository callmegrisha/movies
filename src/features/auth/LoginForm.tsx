import { Link } from 'react-router-dom';
import { FormWrapper } from 'components/FormWrapper';
import { Form } from 'components/Form';
import { Input } from 'components/Input';
import { FormMessage } from 'components/FormMessage';
import { Button } from 'components/Button';
import { FormGroup } from 'components/FormGroup';
import useLoginForm from './useLoginForm.ts';

export function LoginForm() {
  const { register, handleSubmit, errors, error, onSubmitLoginForm } =
    useLoginForm();

  return (
    <FormWrapper className="auth__wrapper" title="Login">
      <Form className="auth__form" onSubmit={handleSubmit(onSubmitLoginForm)}>
        <FormGroup>
          <Input
            type="email"
            placeholder="Email"
            register={register('email', { required: true })}
          />
          {errors.email && (
            <FormMessage className="form-group__msg">
              Can't be empty
            </FormMessage>
          )}
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            placeholder="Password"
            register={register('password', { required: true })}
            autoComplete="password"
          />
          {errors.password && (
            <FormMessage className="form-group__msg">
              Can't be empty
            </FormMessage>
          )}
        </FormGroup>
        <Button className="auth__btn" type="submit">
          Login to your account
        </Button>
      </Form>
      {error && <FormMessage>{error}</FormMessage>}
      <p className="auth__sign">
        Don’t have an account? <Link to="/register">Sign Up</Link>
      </p>
    </FormWrapper>
  );
}
