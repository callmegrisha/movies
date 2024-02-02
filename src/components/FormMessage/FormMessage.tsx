import { FormMessageProps } from './FormMessage.props.ts';
import classNames from 'classnames';
import styles from './FormMessage.module.scss';

export function FormMessage({ className, children }: FormMessageProps) {
  return (
    <span className={classNames(className, styles['form-msg'], 'body-s')}>
      {children}
    </span>
  );
}
