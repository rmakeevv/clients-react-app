import { TextInput } from 'components/Common';
import CreateForm from 'components/CreateForm';
import { deleteOne, getFromLocal } from 'features/clients/clientsSlice';
import { useAppDispatch, useAppSelector } from 'hooks';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import formatDate from 'utils/date';
import styles from './index.module.css';
import { ReactComponent as TrashIcon } from 'assets/images/fi-rr-trash.svg';

const CustomDataTable = () => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const clients = useAppSelector((state) => state.clients.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log('2 times');
    dispatch(getFromLocal());
  }, []);

  if (clients)
    return (
      <div className={styles.table__container}>
        <h1>Клиенты</h1>
        <div className={styles.filter__panel}>
          <TextInput
            placeholder={'Поиск'}
            value={searchInputValue}
            onChange={(event) => setSearchInputValue(event.target.value)}
          />
        </div>

        <table>
          <thead>
            <tr>
              <th style={{ width: '20px' }}>id</th>
              <th style={{ width: '20%' }}>ФИО</th>
              <th style={{ width: '105px' }}>Дата создания</th>
              <th style={{ width: '95px' }}>Телефон</th>
              <th style={{ width: '155px' }}>Регион</th>
              <th style={{ width: '105px' }}>Статус</th>
              <th style={{ width: '22px' }}></th>
            </tr>
          </thead>

          <tbody className={styles.table__body}>
            {clients.map((item) => (
              <tr key={item.id} className={styles.table__row}>
                <td className={styles.table__cell}>{item.id}</td>
                <td className={styles.table__cell}>
                  <Link to={`clients/${item.id}`}>{item.fullname}</Link>{' '}
                </td>
                <td className={styles.table__cell}>
                  {formatDate(item.created_at)}
                </td>
                <td className={styles.table__cell}>{item.phone}</td>
                <td className={styles.table__cell}>{item.region}</td>
                <td className={styles.table__cell}>{item.status}</td>
                <td className={styles.table__cell}>
                  <button
                    className={styles.delete__button}
                    onClick={() => dispatch(deleteOne(item.id))}
                  >
                    <TrashIcon />
                  </button>
                  <button
                    className={styles.delete__button}
                    onClick={() => dispatch(deleteOne(item.id))}
                  >
                    <TrashIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <CreateForm />
      </div>
    );

  return <div>Loading...</div>;
};

export default CustomDataTable;
