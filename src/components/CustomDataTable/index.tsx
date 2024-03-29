import { TextInput, Dropdown, CustomButton } from 'components/Common';
import { DropdownItem } from 'components/Common/Dropdown/types';
import CreateForm from 'components/CreateForm';
import { ContentWrapper } from 'components/index';
import {
  deleteOne,
  filterByStatus,
  getFromLocal,
  IClients,
} from 'features/clients/clientsSlice';
import { useAppDispatch, useAppSelector } from 'hooks';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import formatDate from 'utils/date';
import styles from './index.module.css';
import { ReactComponent as TrashIcon } from 'assets/images/fi-rr-trash.svg';

const statusOptions: DropdownItem[] = [
  { id: 1, value: 'Активен' },
  { id: 2, value: 'Неактивен' },
  { id: 3, value: 'Приостановлен' },
];

const CustomDataTable = () => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const filtered = useAppSelector((state) => state.clients.filtered);
  const dispatch = useAppDispatch();
  const [statusFilter, setStatusFilter] = useState<DropdownItem>({
    id: 0,
    value: '',
  });

  const [tableData, setTableData] = useState<IClients[] | undefined>(undefined);

  useEffect(() => {
    dispatch(getFromLocal());
    setTableData(filtered);
  }, [filtered]);

  useEffect(() => {
    dispatch(filterByStatus(statusFilter.value));
    setTableData(filtered);
    setSearchInputValue('');
  }, [statusFilter.id]);

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(event.target.value);

    setTableData((prevState) => {
      if (prevState) {
        return filtered.filter((client) =>
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
              <th style={{ width: '46px' }}></th>
            </tr>
          </thead>

          <tbody className={styles.table__body}>
            {tableData &&
              tableData.map((item) => (
                <tr key={item.id} className={styles.table__row}>
                  <td style={{ textAlign: 'end' }}>{item.id}</td>
                  <td>
                    <Link to={`clients/${item.id}`}>{item.fullname}</Link>{' '}
                  </td>
                  <td>{formatDate(item.created_at)}</td>
                  <td style={{ textAlign: 'end' }}>{item.phone}</td>
                  <td>{item.region}</td>
                  <td>{item.status}</td>
                  <td>
                    <CustomButton
                      onClick={() => dispatch(deleteOne(item.id))}
                      style={{ width: '32px', padding: '6px' }}
                    >
                      <TrashIcon />
                    </CustomButton>
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
