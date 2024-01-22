import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';

interface ISideBarItem {
  title: string;
  path?: string;
}

const SideBarItem = ({ title, path = '' }: ISideBarItem) => {
  return (
    <Link to={path}>
      <div className={styles.sidebar__item}>{title}</div>
    </Link>
  );
};

export default SideBarItem;
