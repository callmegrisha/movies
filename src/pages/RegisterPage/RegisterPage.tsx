import { Link, Navigate } from 'react-router-dom';
import { Logo } from 'assets/svg/Logo.tsx';
import { FormWrapper } from 'components/FormWrapper';
import { Form } from 'components/Form';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import useAuth from 'hooks/useAuth.ts';

export default function RegisterPage() {
  const { isAuth } = useAuth();

  if (isAuth) return <Navigate to="/" />;
  const onSubmitRegisterForm = () => console.log('register form');
  return (
    <div className="auth">
      <div className="auth__container">
        <Logo className="auth__logo" />
        <FormWrapper className="auth__wrapper" title="Sign Up">
          <Form className="auth__form" onSubmit={onSubmitRegisterForm}>
            <Input placeholder="Email" type="email" />
            <Input placeholder="Password" type="password" />
            <Input placeholder="Repeat password" type="password" />
            <Button className="auth__btn" type="submit">
              Create an account
            </Button>
          </Form>
          <p className="auth__sign">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </FormWrapper>
      </div>
    </div>
  );
}
