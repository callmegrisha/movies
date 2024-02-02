import { Logo } from 'assets/svg/Logo.tsx';
import { LoginForm } from 'features/auth/LoginForm.tsx';
import { Navigate } from 'react-router-dom';
import useAuth from 'hooks/useAuth.ts';

export default function LoginPage() {
  const { isAuth } = useAuth();

  if (isAuth) return <Navigate to="/" />;

  return (
    <div className="auth">
      <div className="auth__container">
        <Logo className="auth__logo" />
        <LoginForm />
      </div>
    </div>
  );
}
