import { CustomButton } from 'components/Common';
import { IClients } from 'features/clients/clientsSlice';
import { useAppSelector } from 'hooks';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './index.module.css';

const ClientPage = () => {
  const { clientId } = useParams();
  const clients = useAppSelector((state) => state.clients.value);
  const [clientData, setClientData] = useState<IClients | undefined>(undefined);

  useEffect(() => {
    setClientData(clients.find((client) => client.id.toString() === clientId));
  }, []);

  return (
    <div className={styles.client__contents}>
      <div className={styles.client__panel}>
        <h1>{clientData?.fullname}</h1>
        <Link to={'/'}>
          <CustomButton>Назад</CustomButton>{' '}
        </Link>
      </div>

      <div className={styles.table__container}>
        <table>
          <tbody>
            <tr>
              <td>ФИО</td>
              <td>{clientData?.fullname}</td>
            </tr>
            <tr>
              <td>Телефон</td>
              <td>{clientData?.phone}</td>
            </tr>
            <tr>
              <td>Дата создания</td>
              <td>{clientData?.created_at}</td>
            </tr>
            <tr>
              <td>Телефон</td>
              <td>{clientData?.phone}</td>
            </tr>
            <tr>
              <td>Статус</td>
              <td>{clientData?.status}</td>
            </tr>
            <tr>
              <td>Регион</td>
              <td>{clientData?.region}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientPage;
