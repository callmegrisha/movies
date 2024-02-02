import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  FieldErrors,
  SubmitHandler,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import { useAuthMutation } from 'services/users';
import { RootState, useAppDispatch } from 'services/store.ts';
import { setCredentials } from 'features/auth/authSlice.ts';
import { isErrorWithMessage, isFetchBaseQueryError } from 'services/helpers.ts';

type Inputs = {
  email: string;
  password: string;
};

interface UseLoginFormReturnType {
  register: UseFormRegister<Inputs>;
  handleSubmit: UseFormHandleSubmit<Inputs, undefined>;
  errors: FieldErrors<Inputs>;
  error: string | null;
  onSubmitLoginForm: SubmitHandler<Inputs>;
}

export default function useLoginForm(): UseLoginFormReturnType {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [fetchLoginUser] = useAuthMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((state: RootState) => state.auth);

  const onSubmitLoginForm: SubmitHandler<Inputs> = async (
    credentials: Inputs
  ): Promise<void> => {
    try {
      const { data, token } = await fetchLoginUser(credentials).unwrap();
      const { id, email } = data;
      const stateObj = {
        user: { id, email },
        error: null,
      };
      dispatch(setCredentials(stateObj));
      Cookies.set('token', token, { expires: 7, secure: true });
      navigate('/');
    } catch (e) {
      const stateObj = {
        user: null,
        error: null,
      };
      if (isFetchBaseQueryError(e)) {
        const errMsg = 'error' in e ? e.error : JSON.stringify(e.data);
        const { error } = JSON.parse(errMsg);
        dispatch(setCredentials({ ...stateObj, error }));
      } else if (isErrorWithMessage(e)) {
        dispatch(setCredentials({ ...stateObj, error: e.message }));
      }
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    error,
    onSubmitLoginForm,
  };
}
