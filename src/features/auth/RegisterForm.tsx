import { FormWrapper } from 'components/FormWrapper';
import { Form } from 'components/Form';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { Link } from 'react-router-dom';
import { FormGroup } from 'components/FormGroup';
import { FormMessage } from 'components/FormMessage';
import useRegisterForm from 'features/auth/useRegisterForm.ts';


export function RegisterForm() {
  const {
    register,
      handleSubmit,
      errors,
      passField,
      onSubmitRegisterForm
  } = useRegisterForm();

  return (
    <FormWrapper className="auth__wrapper" title="Sign Up">
      <Form
        className="auth__form"
        onSubmit={handleSubmit(onSubmitRegisterForm)}
      >
        <FormGroup>
          <Input
            className="form-group__input"
            placeholder="Email"
            type="email"
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
            className="form-group__input"
            placeholder="Password"
            type="password"
            register={register('password', { required: true })}
          />
          {errors.password && (
            <FormMessage className="form-group__msg">
              Can't be empty
            </FormMessage>
          )}
        </FormGroup>
        <FormGroup>
          <Input
            className="form-group__input"
            placeholder="Repeat password"
            type="password"
            register={register('confirmPassword', {
              required: true,
              validate: (value) =>
                value === passField ? true : 'The passwords do not match',
            })}
          />
          {errors.confirmPassword && (
            <FormMessage className="form-group__msg">
              {errors.confirmPassword.message}
            </FormMessage>
          )}
        </FormGroup>
        <Button className="auth__btn" type="submit">
          Create an account
        </Button>
      </Form>

      <p className="auth__sign">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </FormWrapper>
  );
}
