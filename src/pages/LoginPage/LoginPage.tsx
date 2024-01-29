import { Link } from 'react-router-dom';
import { Logo } from 'assets/svg/Logo.tsx';
import { Button } from 'components/Button';

export default function LoginPage() {
  return (
    <div className="auth">
      <Logo />
      <form>
        <input />
        <input />
        <Button>Login to your account</Button>
        <p>
          Don’t have an account? <Link to="/register">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}
