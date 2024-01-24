import React, { PropsWithChildren } from 'react';
import styles from './index.module.css';

interface ICustomButton extends PropsWithChildren {
  onClick?: () => void;
  style?: React.CSSProperties;
}

const CustomButton = ({ children, onClick, style }: ICustomButton) => {
  return (
    <div className={styles.custom__button} style={style} onClick={onClick}>
      {children}
    </div>
  );
};

export default CustomButton;
