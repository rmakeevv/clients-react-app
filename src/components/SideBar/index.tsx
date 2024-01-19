import SideBarItem from 'components/SideBar/Item';
import React from 'react';
import styles from './index.module.css';

const SideBar = () => {
  return (
    <div className={styles.sidebar__wrapper}>
      <SideBarItem title={'Example'} />
      <SideBarItem title={'Example'} />
      <SideBarItem title={'Example'} />
      <SideBarItem title={'Example'} />
      <SideBarItem title={'Example'} />
      <SideBarItem title={'Example'} />
      <SideBarItem title={'Example'} />
      <SideBarItem title={'Example'} />
      <SideBarItem title={'Example'} />
      <SideBarItem title={'Example'} />
      <SideBarItem title={'Example'} />
      <SideBarItem title={'Example'} />
    </div>
  );
};

export default SideBar;
