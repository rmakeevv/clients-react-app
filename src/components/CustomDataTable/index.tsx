import { TextInput } from 'components/Common';
import { deleteOne } from 'features/clients/clientsSlice';
import { useAppDispatch, useAppSelector } from 'hooks';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';
import { ReactComponent as TrashIcon } from 'assets/images/fi-rr-trash.svg';

const CustomDataTable = () => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const clients = useAppSelector((state) => state.clients.value);
  const dispatch = useAppDispatch();

  if (clients)
    return (
      <table>
        <thead>
          <tr className={styles.filter__panel}>
            <th>
              <TextInput
                value={searchInputValue}
                onChange={(event) => setSearchInputValue(event.target.value)}
              />
            </th>
          </tr>

          <tr>
            <th>id</th>
            <th>ФИО</th>
            <th>Дата создания</th>
            <th>Телефон</th>
            <th>Регион</th>
            <th>Статус</th>
            <th></th>
          </tr>
        </thead>

        <tbody className={styles.table__body}>
          {clients.map((item) => (
            <tr key={item.id} className={styles.table__row}>
              <td className={styles.table__cell}>{item.id}</td>
              <td className={styles.table__cell}>
                <Link to={`clients/${item.id}`}>{item.fullname}</Link>{' '}
              </td>
              <td className={styles.table__cell}>{item.created_at}</td>
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );

  return <div>Loading...</div>;
};

export default CustomDataTable;
