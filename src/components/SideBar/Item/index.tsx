import React from 'react';
import styles from './index.module.css';

interface ISideBarItem {
  title: string;
}

const SideBarItem = ({ title }: ISideBarItem) => {
  return <div className={styles.sidebar__item}>{title}</div>;
};

export default SideBarItem;
