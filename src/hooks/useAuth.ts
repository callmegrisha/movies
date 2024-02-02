import Cookies from 'js-cookie';

interface UseAuthReturnType {
  isAuth: boolean;
}

export default function useAuth(): UseAuthReturnType {
  const token = Cookies.get('token');

  return {
    isAuth: !!token,
  };
}
