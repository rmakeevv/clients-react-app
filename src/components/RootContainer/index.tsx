import React, { PropsWithChildren } from 'react';
import styles from './index.module.css';

const RootContainer = ({ children }: PropsWithChildren) => {
  return <div className={styles.root__container}>{children}</div>;
};

export default RootContainer;
