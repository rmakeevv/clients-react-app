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
      <div className={styles.table__row}>
        {tableData.map((item) => {
          for (const key in item) {
            return <div key={item.id}>{item[key]}</div>;
          }
        })}
      </div>
    );

  return <div>Loading...</div>;
};

export default CustomDataTable;
