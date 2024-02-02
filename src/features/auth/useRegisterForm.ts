import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { FieldErrors, SubmitHandler, useForm, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';
import { useAppDispatch } from 'services/store.ts';
import { useRegisterMutation } from 'services/users';
import { setCredentials } from 'features/auth/authSlice.ts';
import { isErrorWithMessage, isFetchBaseQueryError } from 'services/helpers.ts';

type RegisterFormFields = {
  email: string;
  password: string;
  confirmPassword: string;
};

interface UseRegisterFormReturnType {
  register: UseFormRegister<RegisterFormFields>;
  handleSubmit: UseFormHandleSubmit<RegisterFormFields, undefined>;
  errors: FieldErrors<RegisterFormFields>;
  passField: string;
  onSubmitRegisterForm: SubmitHandler<RegisterFormFields>;
}

export default function useRegisterForm(): UseRegisterFormReturnType {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormFields>();

  const passField = watch('password');
  const [fetchRegisterUser] = useRegisterMutation();

  const onSubmitRegisterForm: SubmitHandler<RegisterFormFields> = async (
    credentials: RegisterFormFields
  ): Promise<void> => {
    try {
      const registerData = {
        email: credentials.email,
        password: credentials.password
      };
      const { data, token } = await fetchRegisterUser(registerData).unwrap();
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
    passField,
    onSubmitRegisterForm
  }
}