import { TextInput } from 'components/Common';
import React, { useEffect, useState } from 'react';
import data from 'service/clients.json';
import styles from './index.module.css';
import { ReactComponent as TrashIcon } from 'assets/images/fi-rr-trash.svg';

interface ClientsIndex {
  [key: string]: any;
}

interface IClients extends ClientsIndex {
  id: number;
  fullname: string;
  created_at: string;
  phone: string;
  region: string;
  status: string;
}

const CustomDataTable = () => {
  const [tableData, setTableData] = useState<IClients[] | undefined>(undefined);
  const [searchInputValue, setSearchInputValue] = useState('');

  const deleteItem = (id: number) => {
    setTableData((prevState) => prevState?.filter((item) => item.id !== id));
  };

  useEffect(() => {
    setTableData(
      data.map((item) => ({
        ...item,
        created_at: new Date(item.created_at).toLocaleDateString('ru'),
      }))
    );
  }, []);

  if (tableData)
    return (
      <table>
        <thead>
          <tr>
            <TextInput
              value={searchInputValue}
              onChange={(event) => setSearchInputValue(event.target.value)}
            />
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
          {tableData.map((item) => (
            <tr key={item.id} className={styles.table__row}>
              <td className={styles.table__cell}>{item.id}</td>
              <td className={styles.table__cell}>{item.fullname}</td>
              <td className={styles.table__cell}>{item.created_at}</td>
              <td className={styles.table__cell}>{item.phone}</td>
              <td className={styles.table__cell}>{item.region}</td>
              <td className={styles.table__cell}>{item.status}</td>
              <td className={styles.table__cell}>
                <button
                  className={styles.delete__button}
                  onClick={() => deleteItem(item.id)}
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
