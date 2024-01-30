import classNames from 'classnames';
import { FormProps } from './Form.interface.ts';
import styles from './Form.module.scss';

export function Form({ className, children, onSubmit }: FormProps) {
  return (
    <form className={classNames(className, styles.form)} onSubmit={onSubmit}>{children}</form>
  );
}
