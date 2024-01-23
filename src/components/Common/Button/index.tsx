import React, { PropsWithChildren } from 'react';
import styles from './index.module.css';

const CustomButton = ({ children }: PropsWithChildren) => {
  return <div className={styles.custom__button}>{children}</div>;
};

export default CustomButton;
