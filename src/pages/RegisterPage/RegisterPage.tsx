import { Navigate } from 'react-router-dom';
import { Logo } from 'assets/svg/Logo.tsx';
import useAuth from 'hooks/useAuth.ts';
import { RegisterForm } from 'features/auth/RegisterForm.tsx';

export default function RegisterPage() {
  const { isAuth } = useAuth();

  if (isAuth) return <Navigate to="/" />;

  return (
    <div className="auth">
      <div className="auth__container">
        <Logo className="auth__logo" />
        <RegisterForm />
      </div>
    </div>
  );
}
