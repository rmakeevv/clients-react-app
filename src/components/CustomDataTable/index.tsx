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

console.log(data);

const CustomDataTable = () => {
  const [tableData, setTableData] = useState<IClients[] | undefined>(undefined);

  useEffect(() => {
    setTableData(data);
  }, []);

  if (tableData)
    return (
      <div className={styles.table__body}>
        {tableData.map((item) => (
          <div key={item.id} className={styles.table__row}>
            {Object.keys(item).map((key) => (
              <div key={item[key]} className={styles.table__cell}>
                {item[key]}
              </div>
            ))}
          </div>
        ))}
      </div>
    );

  return <div>Loading...</div>;
};

export default CustomDataTable;
