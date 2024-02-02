import classNames from 'classnames';
import { FormGroupProps } from './FormGroup.props.ts';

export function FormGroup({ className, children }: FormGroupProps) {
  return <div className={classNames('form-group', className)}>{children}</div>;
}
