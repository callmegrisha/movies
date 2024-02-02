import { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  register: UseFormRegisterReturn;
}
