import classNames from 'classnames';
import { InputProps } from './Input.interface.ts';
import styles from './Input.module.scss';

export function Input({ className, placeholder, type, register }: InputProps) {
  return <input className={classNames(styles.input, className)} type={type} placeholder={placeholder} {...register} />;
}
