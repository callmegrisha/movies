import { ContentProps } from './Content.props.ts';
import styles from './Content.module.scss';

export function Content({ children }: ContentProps) {
  return <div className={styles.content}>{children}</div>;
}
