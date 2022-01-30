import { FC } from 'react';

import styles from './DefaultLayout.module.css';

export const DefaultLayout: FC = ({ children }) => {
  return <main className={styles['layout']}>{children}</main>;
};
