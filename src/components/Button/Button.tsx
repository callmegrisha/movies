import classNames from 'classnames';
import { ButtonProps } from './Button.interface.ts';
import styles from './Button.module.scss';

export function Button({ className, children, onClick }: ButtonProps) {
  return (
    <button
      className={classNames(styles.button, className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
