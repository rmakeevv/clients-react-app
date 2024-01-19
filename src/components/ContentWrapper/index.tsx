import React, { PropsWithChildren } from 'react';
import styles from './index.module.css';

const ContentWrapper = ({ children }: PropsWithChildren) => {
  return <div className={styles.content__wrapper}>{children}</div>;
};

export default ContentWrapper;
