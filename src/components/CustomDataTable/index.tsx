import React, { useEffect, useState } from 'react';
import data from 'service/clients.json';
import styles from './index.module.css';

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
            <th></th>
          </tr>
        </thead>

        <tbody className={styles.table__body}>
          {tableData.map((item) => (
            <tr key={item.id} className={styles.table__row}>
              {Object.keys(item).map((key) => (
                <td key={item[key]} className={styles.table__cell}>
                  {item[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );

  return <div>Loading...</div>;
};

export default CustomDataTable;
