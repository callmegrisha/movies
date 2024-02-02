import { Logo } from 'assets/svg/Logo.tsx';
import { LoginForm } from 'features/auth/LoginForm.tsx';


export default function LoginPage() {
  return (
    <div className="auth">
      <div className="auth__container">
        <Logo className="auth__logo" />
        <LoginForm />
      </div>
    </div>
  );
}
