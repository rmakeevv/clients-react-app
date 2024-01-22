import SideBarItem from 'components/SideBar/Item';
import React from 'react';
import styles from './index.module.css';

const SideBar = () => {
  return (
    <div className={styles.sidebar__wrapper}>
      <SideBarItem title={'Главная'} />
      <SideBarItem title={'Клиенты'} />
      <SideBarItem title={'Проекты'} />
      <SideBarItem title={'База данных'} />
      <SideBarItem title={'Организация'} />
      <SideBarItem title={'Сотрудники'} />
      <SideBarItem title={'Отчеты'} />
      <SideBarItem title={'Переводы'} />
    </div>
  );
};

export default SideBar;
