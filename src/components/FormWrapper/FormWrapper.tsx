import classNames from 'classnames';
import { FormWrapperProps } from './FormWrapper.props.ts';
import styles from './FormWrapper.module.scss';

export function FormWrapper({ className, title, children }: FormWrapperProps) {
  return (
    <div className={classNames(styles['form-wrapper'], className)}>
      {title && (
        <h1 className={classNames(styles['form-wrapper__title'], 'heading-l')}>
          {title}
        </h1>
      )}
      {children}
    </div>
  );
}
