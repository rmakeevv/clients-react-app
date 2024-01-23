import { TextInput } from 'components/Common';
import Dropdown from 'components/Common/Dropdown';
import { DropdownItem } from 'components/Common/Dropdown/types';
import CreateForm from 'components/CreateForm';
import { ContentWrapper } from 'components/index';
import {
  deleteOne,
  getFromLocal,
  IClients,
} from 'features/clients/clientsSlice';
import { useAppDispatch, useAppSelector } from 'hooks';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import formatDate from 'utils/date';
import styles from './index.module.css';
import { ReactComponent as TrashIcon } from 'assets/images/fi-rr-trash.svg';
import { ReactComponent as PencilIcon } from 'assets/images/fi-rr-pencil.svg';

const statusOptions: DropdownItem[] = [
  { id: 1, value: 'Активен' },
  { id: 2, value: 'Неактивен' },
  { id: 3, value: 'Приостановлен' },
];

const CustomDataTable = () => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const clients = useAppSelector((state) => state.clients.value);
  const dispatch = useAppDispatch();
  const [statusFilter, setStatusFilter] = useState<DropdownItem>({
    id: 0,
    value: '',
  });

  const [tableData, setTableData] = useState<IClients[] | undefined>(undefined);

  useEffect(() => {
    dispatch(getFromLocal());
    setTableData(clients);
  }, []);

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(event.target.value);

    setTableData((prevState) => {
      if (prevState) {
        return clients.filter((client) =>
          client.fullname
            .toLowerCase()
            .includes(event.target.value.toLowerCase().trim())
        );
      }
    });
  };

  return (
    <ContentWrapper>
      <div className={styles.table__container}>
        <h1>Клиенты</h1>
        <div className={styles.filter__panel}>
          <TextInput
            placeholder={'Поиск по ФИО'}
            value={searchInputValue}
            onChange={onSearch}
          />
          <Dropdown
            onChange={setStatusFilter}
            value={statusFilter}
            placeholder={'Выберите статус'}
            options={statusOptions}
          />
        </div>

        <table>
          <thead>
            <tr>
              <th style={{ textAlign: 'end' }}>id</th>
              <th>ФИО</th>
              <th>Дата создания</th>
              <th style={{ width: '120px', textAlign: 'end' }}>Телефон</th>
              <th style={{ width: '150px' }}>Регион</th>
              <th>Статус</th>
              <th style={{ width: '105px' }}></th>
            </tr>
          </thead>

          <tbody className={styles.table__body}>
            {tableData &&
              tableData.map((item) => (
                <tr key={item.id} className={styles.table__row}>
                  <td
                    style={{ textAlign: 'end' }}
                    className={styles.table__cell}
                  >
                    {item.id}
                  </td>
                  <td className={styles.table__cell}>
                    <Link to={`clients/${item.id}`}>{item.fullname}</Link>{' '}
                  </td>
                  <td className={styles.table__cell}>
                    {formatDate(item.created_at)}
                  </td>
                  <td
                    className={styles.table__cell}
                    style={{ textAlign: 'end' }}
                  >
                    {item.phone}
                  </td>
                  <td className={styles.table__cell}>{item.region}</td>
                  <td className={styles.table__cell}>{item.status}</td>
                  <td className={styles.action__cell}>
                    <button
                      className={styles.delete__button}
                      onClick={() => dispatch(deleteOne(item.id))}
                    >
                      <TrashIcon />
                    </button>
                    <button
                      className={styles.edit__button}
                      onClick={() => dispatch(deleteOne(item.id))}
                    >
                      <PencilIcon />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <CreateForm />
    </ContentWrapper>
  );
};

export default CustomDataTable;
