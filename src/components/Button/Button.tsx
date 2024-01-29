import classNames from 'classnames';
import { ButtonProps } from './Button.interface.ts';
import styles from './Button.module.scss';

export function Button({ className, children, type, onClick }: ButtonProps) {
  return (
    <button
      className={classNames(styles.button, className || '')}
      type={type || 'button'}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
